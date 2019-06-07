import React from "react";
import { useForm, useField } from "react-final-form-hooks";
import Select from "./Select";

const onSubmit = form => {
  console.log("submitting", form);
};

const validate = form => {
  const errors = {};
  if (!form.ncs) {
    errors.ncs = "Required";
  }
  if (!form.sequence) {
    errors.sequence = "Required";
  }
  if (!form.stock) {
    errors.stock = "Required";
  }
  return errors;
};

const ncsOptions = [
  {
    value: "NCD2",
    label: "NCD2"
  },
  {
    value: "2H-ND2",
    label: "2H-ND2"
  },
  {
    value: "2H-ND3",
    label: "2H-ND3"
  },
  {
    value: "ALT12",
    label: "ALT12"
  },
  {
    value: "ALT16",
    label: "ALT16"
  },
  {
    value: "NC2",
    label: "NC2"
  }
];

const SolutionForm = () => {
  const { form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
    validate
  });
  const ncs = useField("ncs", form);
  const sequence = useField("sequence", form);
  const stock = useField("stock", form);

  const isValidSequence = !sequence.meta.error;
  const isValidStock = !stock.meta.error;
  const sequenceClassName = isValidSequence
    ? "form-control is-valid"
    : "form-control is-invalid";
  const stockClassName = isValidStock
    ? "form-control is-valid"
    : "form-control is-invalid";

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="ncs">NCS</label>
        <Select {...ncs.input} options={ncsOptions} className="form-control" />
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
      <button
        type="btn btn-primary submit"
        disabled={pristine || submitting || !isValidSequence || !isValidStock}
      >
        Submit
      </button>
    </form>
  );
};

export default SolutionForm;
