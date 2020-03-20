import React from "react";
import PropTypes from "prop-types";
import { resolveSpacingClass } from "../utils/resolvers";
import { Box } from "./Box.jsx";

const Column = ({ children, width, space }) => {
  return (
    <Box classNames={`w-${width}`}>
      <Box classNames={resolveSpacingClass("mx", space)}>{children}</Box>
    </Box>
  );
};

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  space: PropTypes.string
};

Column.defaultProps = {
  children: undefined,
  width: "w-full",
  space: undefined
};

export { Column };
