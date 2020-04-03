import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, bgColor, textColor }) => (
  <div
    className={`overflow-hidden bg-${bgColor} text-${textColor} rounded-lg shadow`}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

Card.defaultProps = {
  children: undefined,
  bgColor: "white",
  textColor: "grey-800",
};

export { Card };
