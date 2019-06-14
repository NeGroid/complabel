import React from "react";
import useCheckSolutionStatus from "./useCheckSolutionStatus";

const SolutionTask = ({ url }) => {
  const { task } = useCheckSolutionStatus(url);

  if (task) {
    const { state, result } = task;
    const resultTextarea = !result ? null : (
      <textarea
        name="result"
        disabled={true}
        value={result}
        className="form-control"
      ></textarea>
    );
    return (
      <div className="row">
        <div className="col form-group">
          <label htmlFor="result">Status: {state}</label>
          {resultTextarea}
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default SolutionTask;
