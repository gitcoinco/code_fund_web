import React from "react";
import PropTypes from "prop-types";

export const Flex = ({
  display,
  direction,
  wrap,
  justify,
  align,
  height,
  width,
  children
}) => {
  const classes = `h-${height} w-${width} ${display} flex-${direction} flex-${wrap} justify-${justify} items-${align}`;
  return <div className={classes}>{children}</div>
};

Flex.propTypes = {
  all: PropTypes.string,
  display: PropTypes.string,
  direction: PropTypes.string,
  wrap: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node
};

Flex.defaultProps = {
  display: "flex",
  direction: "row",
  wrap: "no-wrap",
  justify: "start",
  align: "start",
  height: "full",
  width: "full",
  children: undefined
};
