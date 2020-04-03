import React from "react";
import PropTypes from "prop-types";

export const Padding = ({
  all,
  top,
  right,
  bottom,
  left,
  xAxis,
  yAxis,
  children
}) => {
  const classes = `p-${all} pt-${top} pr-${right} pb-${bottom} pl-${left} px-${xAxis} py-${yAxis}`;
  return <div className={classes}>{children}</div>;
};

Padding.propTypes = {
  all: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  xAxis: PropTypes.string,
  yAxis: PropTypes.string,
  children: PropTypes.node
};

// Padding.defaultProps = {
//   all: "0",
//   top: "0",
//   right: "0",
//   bottom: "0",
//   left: "0",
//   xAxis: "0",
//   yAxis: "0",
//   children: undefined
// };
