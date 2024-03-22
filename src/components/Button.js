import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, disabled, type, className }) => {
  return (
    <button
      className="text-md text-white bg-button rounded-full px-5 py-1 shadow-lg font-semibold"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  onclick: () => {},
  disabled: false,
  type: "button",
  className: "",
};

export default Button;
