import React from "react";
import { usePost } from "use-http";
import useSolutionForm from "./useSolutionForm";
import Select from "../Select";

const SubmitButton = ({ loading = false, ...rest }) => (
  <button type="btn btn-primary submit" {...rest}>
    {loading ? <span>Loading...</span> : <span>Submit</span>}
  </button>
);

const SolutionForm = () => {
  const [data, loading, error, post] = usePost({
    baseUrl: "/api",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const onSubmit = form => {
    console.log("submitting", form);
    post("/solutions", form);
  };

  const {
    ncsOptions,
    handleSubmit,
    pristine,
    submitting,
    ncs,
    sequence,
    stock,
    isValidSequence,
    isValidStock,
    isValidNcs,
    sequenceClassName,
    stockClassName,
    ncsClassName
  } = useSolutionForm(onSubmit);

  const errorDiv = error ? <div>Error while submitting a form.</div> : null;
  const taskHref = data && data.url ? <a href={data.url}>Task</a> : null;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ncs">NCS</label>
          <Select
            {...ncs.input}
            options={ncsOptions}
            className={ncsClassName}
          />
          {ncs.meta.touched && ncs.meta.error && (
            <span className="invalid-feedback">{ncs.meta.error}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="sequence">Sequence</label>
          <textarea
            {...sequence.input}
            placeholder="Sequence"
            className={sequenceClassName}
          />
          {sequence.meta.touched && sequence.meta.error && (
            <span className="invalid-feedback">{sequence.meta.error}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <textarea
            {...stock.input}
            placeholder="Stock"
            className={stockClassName}
          />
          {stock.meta.touched && stock.meta.error && (
            <span className="invalid-feedback">{stock.meta.error}</span>
          )}
        </div>
        <SubmitButton
          loading={loading}
          disabled={
            pristine ||
            submitting ||
            !isValidSequence ||
            !isValidStock ||
            !isValidNcs
          }
        />
      </form>
      <div className="row">
        <div className="col">
          {errorDiv}
          {taskHref}
        </div>
      </div>
    </>
  );
};

export default SolutionForm;
