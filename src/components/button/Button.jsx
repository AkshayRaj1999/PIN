import React from "react";
import PropTypes from "prop-types";
import './Button.scss'

const Button = ({ text, onClick, className, showArrow }) => {
  return (
    <button className={`primary__button ${className}`} onClick={onClick}>
      {text}
      {showArrow && (
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.0075 2.25H0V3.75H9.0075V6L12 3L9.0075 0V2.25Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  showArrow: PropTypes.bool,
};


export default Button;
