import React from "react";
import useCheckSolutionStatus from "./useCheckSolutionStatus";

const TASK_STATUS_PENDING = "PENDING";

const SolutionTask = ({ url }) => {
  var { task, loading } = useCheckSolutionStatus(url);

  if (task === null) {
    task = { state: TASK_STATUS_PENDING };
  }
  const { state, result } = task;
  const status = loading ? "LOADING" : state;
  const resultTextarea = !result ? null : (
    <textarea
      name="result"
      disabled={true}
      value={result}
      className="form-control"
      rows={5}
    ></textarea>
  );

  return (
    <div className="row">
      <div className="col form-group">
        <label htmlFor="result">Status: {status}</label>
        {resultTextarea}
      </div>
    </div>
  );
};

export default SolutionTask;
