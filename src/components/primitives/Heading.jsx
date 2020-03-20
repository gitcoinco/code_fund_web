import React from "react";
import PropTypes from "prop-types";
import { Box } from "./Box.jsx";
import { resolveAlignmentClass } from "../utils/resolvers";

const Heading = ({ level, align, children }) => {
  const resolveLevel = {
    "1": "h1",
    "2": "h2",
    "3": "h3",
    "4": "h4",
    "5": "h5",
    "6": "h6"
  };

  const resolveClasses = {
    "1":
      "text-5xl leading-12 font-extrabold tracking-tight sm:leading-none sm:text-8xl lg:text-6xl xl:text-6xl",
    "2":
      "text-4xl leading-10 font-extrabold tracking-tight sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl",
    "3":
      "text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10",
    "4":
      "text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl sm:leading-9",
    "5": "text-lg leading-6 font-medium"
  };

  const classes = `${resolveClasses[level]} ${resolveAlignmentClass(align)}`;

  return (
    <Box is={resolveLevel[level]} classNames={classes}>
      {children}
    </Box>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.string,
  align: PropTypes.string
};

Heading.defaultProps = {
  children: undefined,
  level: "2",
  align: "left"
};

export { Heading };
