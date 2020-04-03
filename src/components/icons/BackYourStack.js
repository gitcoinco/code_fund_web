import React from "react";
import PropTypes from "prop-types";

const BackYourStack = ({ classes }) => (
  <a
    href="https://backyourstack.com/gitcoinco"
    target="_blank"
    rel="noopener noreferrer"
    className={classes}
  >
    <img
      src="https://backyourstack.com/gitcoinco/badge"
      className="w-full h-24"
    />
  </a>
);

BackYourStack.propTypes = {
  classes: PropTypes.string,
};

BackYourStack.defaultProps = {
  classes: "w-full",
};

export default BackYourStack;
