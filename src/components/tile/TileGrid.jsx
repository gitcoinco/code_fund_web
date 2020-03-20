import React from "react";
import PropTypes from "prop-types";

const TileGrid = ({ children, columns, mdColumns, lgColumns }) => (
  <div className="relative">
    <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`mt-8 grid grid-cols-${columns} gap-0.5 md:grid-cols-${mdColumns} lg:mt-0 lg:grid-cols-${lgColumns}`}
        >
          {children}
        </div>
      </div>
    </div>
  </div>
);

TileGrid.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.number,
  mdColumns: PropTypes.number,
  lgColumns: PropTypes.number
};

TileGrid.defaultProps = {
  children: undefined,
  columns: 2,
  mdColumns: 3,
  lgColumns: 2
};

export { TileGrid };
