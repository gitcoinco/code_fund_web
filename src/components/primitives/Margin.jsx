import React from "react";
import PropTypes from "prop-types";

export const Margin = ({
  all,
  top,
  right,
  bottom,
  left,
  xAxis,
  yAxis,
  children,
}) => {
  const classes = `m-${all} mt-${top} mr-${right} mb-${bottom} ml-${left} mx-${xAxis} my-${yAxis}`;
  return <div className={classes}>{children}</div>;
};

Margin.propTypes = {
  all: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  xAxis: PropTypes.string,
  yAxis: PropTypes.string,
  children: PropTypes.node,
};

// Margin.defaultProps = {
//   all: "0",
//   top: "0",
//   right: "0",
//   bottom: "0",
//   left: "0",
//   xAxis: "0",
//   yAxis: "0",
//   children: undefined
// };
