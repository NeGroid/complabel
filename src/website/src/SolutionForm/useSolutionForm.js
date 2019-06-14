import { useForm, useField } from "react-final-form-hooks";

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

const useSolutionForm = onSubmit => {
  const { form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
    validate,
    initialValues: {
      ncs: ncsOptions[0].value
    }
  });
  const ncs = useField("ncs", form);
  const sequence = useField("sequence", form);
  const stock = useField("stock", form);

  const isValidSequence = !sequence.meta.error;
  const isValidStock = !stock.meta.error;
  const isValidNcs = !ncs.meta.error;
  const sequenceClassName = isValidSequence
    ? "form-control is-valid"
    : "form-control is-invalid";
  const stockClassName = isValidStock
    ? "form-control is-valid"
    : "form-control is-invalid";
  const ncsClassName = isValidNcs
    ? "form-control is-valid"
    : "form-control is-invalid";

  return {
    ncsOptions,
    form,
    handleSubmit,
    pristine,
    submitting,
    ncs,
    sequence,
    stock,
    isValidNcs,
    isValidSequence,
    isValidStock,
    sequenceClassName,
    stockClassName,
    ncsClassName
  };
};

export default useSolutionForm;
