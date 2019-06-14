import React from "react";

const SubmitButton = ({ loading = false, ...rest }) => (
  <button type="btn btn-primary submit" {...rest}>
    {loading ? <span>Loading...</span> : <span>Submit</span>}
  </button>
);

export default SubmitButton;
