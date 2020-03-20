import React from "react";
import PropTypes from "prop-types";

const Metric = ({ quantity, unit }) => (
  <div className="p-6 overflow-hidden text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
    <p className="text-5xl font-extrabold leading-none text-indigo-600">
      {quantity}
    </p>
    <p className="mt-2 text-lg font-medium leading-6 text-gray-500">{unit}</p>
  </div>
);

Metric.propTypes = {
  quantity: PropTypes.string,
  unit: PropTypes.string
};

Metric.defaultProps = {
  quantity: "0",
  unit: "Units"
};

export { Metric };
