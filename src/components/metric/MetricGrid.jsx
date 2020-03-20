import React from "react";
import PropTypes from "prop-types";

const MetricGrid = ({ children, columns }) => (
  <div className="relative">
    <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-${columns}`}
        >
          {children}
        </div>
      </div>
    </div>
  </div>
);

MetricGrid.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.number
};

MetricGrid.defaultProps = {
  children: undefined,
  columns: 3
};

export { MetricGrid };
