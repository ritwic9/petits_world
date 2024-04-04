import React from "react";
import PropTypes from "prop-types";

const Button = ({ styles, label, onClick, disabled, type }) => {
  return (
    <button
      className={styles}
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
