import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  placeholder,
  value,
  label,
  name,
  type,
  className,
  onChange,
}) => (
  <>
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      className="my-2 lg:m-2 rounded-md p-2 w-full shadow-lg"
      onChange={onChange}
    />
  </>
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  className: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: "",
  value: "",
  onclick: () => {},
  type: "",
  className: "",
};

export default InputField;
