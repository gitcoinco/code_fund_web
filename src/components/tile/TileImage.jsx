import React from "react";
import PropTypes from "prop-types";

const TileImage = ({ colspan, children }) => (
  <div
    className={`flex justify-center col-span-${colspan} px-8 py-8 bg-gray-50`}
  >
    {children}
  </div>
);

TileImage.propTypes = {
  colspan: PropTypes.string,
  children: PropTypes.node,
};

TileImage.defaultProps = {
  colspan: "1",
  children: undefined,
};

export { TileImage };
