import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ children }) => (
  <div className="px-4 py-5 border-b border-gray-200 sm:px-6">{children}</div>
);

CardHeader.propTypes = {
  children: PropTypes.node,
};

CardHeader.defaultProps = {
  children: undefined,
};

export { CardHeader };
