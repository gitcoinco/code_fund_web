import React from "react";
import PropTypes from "prop-types";

const CardBody = ({ children }) => (
  <div className="px-4 py-5 sm:p-6">{children}</div>
);

CardBody.propTypes = {
  children: PropTypes.node,
};

CardBody.defaultProps = {
  children: undefined,
};

export { CardBody };
