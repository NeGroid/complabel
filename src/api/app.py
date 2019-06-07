from flask import Flask, url_for, request
from worker import celery
import celery.states as states

app = Flask(__name__)

@app.route('/api/solutions', methods=['POST'])
def find() -> str:
    ncs = request.form['ncs']
    sequence = request.form['sequence']
    stock = request.form['stock']
    task = celery.send_task('tasks.find_solution', args=[ncs, sequence, stock], kwargs={})
    response = f"<a href='{url_for('check_task', task_id=task.id)}'>check status of {task.id} </a>"
    return response

@app.route('/api/solutions/<string:task_id>', methods=['GET'])
def check_task(task_id: str) -> str:
    res = celery.AsyncResult(task_id)
    if res.state == states.PENDING:
        return res.state
    else:
        return str(res.result)