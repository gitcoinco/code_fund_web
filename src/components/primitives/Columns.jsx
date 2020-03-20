import React from "react";
import PropTypes from "prop-types";
import { resolveSpacingClass } from "../utils/resolvers";

const Columns = ({ children, space }) => {
  const classes = `${resolveSpacingClass("mx", space)} flex`;
  return <div className={classes}>{children}</div>;
};

Columns.propTypes = {
  children: PropTypes.node,
  space: PropTypes.string
};

Columns.defaultProps = {
  children: undefined,
  space: "default"
};

export { Columns };
