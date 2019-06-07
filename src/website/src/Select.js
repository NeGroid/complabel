import React from "react";
import PropTypes from "prop-types";

const Select = ({ options, value, ...rest }) => {
  const selectValue = value !== null ? value : "";
  return (
    <select value={selectValue} {...rest}>
      {options.map(({ value, label }, index) => {
        return (
          <option key={index} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.string
};

export default Select;
