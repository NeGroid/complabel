from flask import Flask, url_for, request, jsonify
from worker import celery
import celery.states as states

app = Flask(__name__)

@app.route('/api/solutions', methods=['POST'])
def find() -> str:
    content = request.get_json()
    ncs = content['ncs']
    sequence = content['sequence']
    stock = content['stock']
    task = celery.send_task('tasks.find_solution', args=[ncs, sequence, stock], kwargs={})
    data = {
        'url': url_for('check_task', task_id=task.id)
    }
    response = jsonify(data)
    response.status_code = 200

    return response

@app.route('/api/solutions/<string:task_id>', methods=['GET'])
def check_task(task_id: str) -> str:
    res = celery.AsyncResult(task_id)
    data = { 'state' : res.state } if res.state == states.PENDING else {
        'state' : res.state,
        'result' : res.result
    }
    response = jsonify(data)
    response.status_code = 200

    return response