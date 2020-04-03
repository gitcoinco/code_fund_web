import React from "react";
import PropTypes from "prop-types";

const Tile = ({ colspan, children }) => (
  <div className={`flex justify-center col-span-${colspan} px-8 py-8`}>
    {children}
  </div>
);

Tile.propTypes = {
  colspan: PropTypes.string,
  children: PropTypes.node,
};

Tile.defaultProps = {
  colspan: "1",
  children: undefined,
};

export { Tile };
