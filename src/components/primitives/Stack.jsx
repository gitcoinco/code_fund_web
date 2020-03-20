import React from "react";
import PropTypes from "prop-types";
import { resolveSpacingClass } from "../utils/resolvers";

const Stack = ({ is, children, space }) => {
  const Component = is;
  const classes = resolveSpacingClass("pb", space);

  return <Component className={classes}>{children}</Component>;
};

Stack.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  space: PropTypes.string
};

Stack.defaultProps = {
  is: "div",
  children: undefined,
  space: "default"
};

export { Stack };
