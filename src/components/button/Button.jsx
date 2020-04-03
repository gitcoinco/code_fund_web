import React from "react";
import PropTypes from "prop-types";

const Button = ({ children }) => (
  <span className="inline-flex rounded-md shadow-sm">
    <button
      type="button"
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
    >
      {children}
    </button>
  </span>
);

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: undefined,
};

export { Button };
