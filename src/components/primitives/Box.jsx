import React from "react";
import PropTypes from "prop-types";

const Box = ({ is, children, display, position, classNames }) => {
  const Component = is === "div" && display === "inline" ? "span" : is;
  const classes =
    position || classNames
      ? [classNames, position].filter(Boolean).join(" ")
      : undefined;

  return <Component className={classes}>{children}</Component>;
};

Box.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  display: PropTypes.string,
  classNames: PropTypes.string,
  position: PropTypes.string
};

Box.defaultProps = {
  is: "div",
  children: undefined,
  display: "block",
  classNames: undefined,
  position: undefined
};

export { Box };
