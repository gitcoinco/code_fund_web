import React from "react";
import PropTypes from "prop-types";

const CardFooter = ({ children }) => (
  <div className="px-4 py-4 border-t border-gray-200 sm:px-6">{children}</div>
);

CardFooter.propTypes = {
  children: PropTypes.node
};

CardFooter.defaultProps = {
  children: undefined
};

export { CardFooter };
