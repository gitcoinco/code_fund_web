import React from "react";
import PropTypes from "prop-types";
import { Box } from "./Box.jsx";

const Divider = () => {
  // return (
  //   <Box position="relative">
  //     <Box position="absolute" className="pb-8 mb-8 border-b border-gray-200">
  //       {` `}
  //     </Box>
  //   </Box>
  // );
  return <Box is="hr" classNames="pt-8 mt-8" />;
};

Divider.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

Divider.defaultProps = {
  is: "div",
  children: undefined,
  display: "block",
  classNames: undefined,
};

export { Divider };
