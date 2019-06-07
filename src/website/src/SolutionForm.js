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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>NCS</label>
        <Select {...ncs.input} options={ncsOptions} />
        {ncs.meta.touched && ncs.meta.error && <span>{ncs.meta.error}</span>}
      </div>
      <div>
        <label>Sequencee</label>
        <textarea {...sequence.input} placeholder="Sequencee" />
        {sequence.meta.touched && sequence.meta.error && (
          <span>{sequence.meta.error}</span>
        )}
      </div>
      <div>
        <label>Stock</label>
        <textarea {...stock.input} placeholder="Stock" />
        {stock.meta.touched && stock.meta.error && (
          <span>{stock.meta.error}</span>
        )}
      </div>
      <button type="btn btn-primary submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

export default SolutionForm;
