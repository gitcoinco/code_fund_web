import React from "react";
import PropTypes from "prop-types";

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-medium leading-6 text-gray-900">{children}</h3>
);

CardTitle.propTypes = {
  children: PropTypes.node,
};

CardTitle.defaultProps = {
  children: undefined,
};

export { CardTitle };
