import React from "react";
import PropTypes from "prop-types";

export const Text = ({
  element,
  leading,
  font,
  color,
  size,
  weight,
  align,
  position,
  children,
}) => {
  const Component = element;
  const classes = `text-${color} font-${font} text-${size} font-${weight} text-${align} leading-${leading} position-${position}`;
  return <Component className={classes}>{children}</Component>;
};

Text.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  element: PropTypes.string,
  font: PropTypes.string,
  fontStyle: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  leading: PropTypes.string,
  position: PropTypes.string,
};

Text.defaultProps = {
  align: "left",
  children: undefined,
  color: "gray-900",
  element: "p",
  font: "sans",
  size: "base",
  weight: "normal",
  leading: "normal",
  position: "relative",
};
