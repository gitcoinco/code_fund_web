import React from "react";
import PropTypes from "prop-types";
import { Box } from "./Box.jsx";
import { resolveAlignmentClass } from "../utils/resolvers";

const Text = ({ size, align, children }) => {
  const resolveElement = {
    small: "small",
    default: "p",
    strong: "strong",
    span: "span"
  };

  // const resolveWeight = {
  //   "thin": "font-thin",
  //   "default": "font-normal",
  //   "bold": "font-bold",
  // };

  const classes = `${resolveAlignmentClass(align)}`;

  return (
    <Box is={resolveElement[size]} classNames={classes}>
      {children}
    </Box>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  align: PropTypes.string
};

Text.defaultProps = {
  children: undefined,
  size: "default",
  align: "left"
};

export { Text };
