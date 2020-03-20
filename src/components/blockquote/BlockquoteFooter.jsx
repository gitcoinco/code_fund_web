import React from "react";
import PropTypes from "prop-types";
import { Tile } from "../tile/Tile.jsx";

const BlockquoteFooter = ({ children }) => (
  <footer className="mt-8">
    <Tile>{children}</Tile>
  </footer>
);

BlockquoteFooter.propTypes = {
  children: PropTypes.node
};

BlockquoteFooter.defaultProps = {
  children: undefined
};

export { BlockquoteFooter };
