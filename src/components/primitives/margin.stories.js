import React from "react";

import { Margin } from "./Margin.jsx";

const lorem = `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`;
export default {
  title: "Margin",
  component: Margin,
  parameters: {
    info: { inline: false }
  }
};

export const margin = () => (
  <div className="border border-purple-800">
    <Margin all="4">{lorem}</Margin>
  </div>
);

export const marginTop = () => (
  <div className="border border-purple-800">
    <Margin top="6">{lorem}</Margin>
  </div>
);

export const marginRight = () => (
  <div className="border border-purple-800">
    <Margin right="3">{lorem}</Margin>
  </div>
);

export const marginBottom = () => (
  <div className="border border-purple-800">
    <Margin bottom="4">{lorem}</Margin>
  </div>
);

export const marginLeft = () => (
  <div className="border border-purple-800">
    <Margin left="6">{lorem}</Margin>
  </div>
);

export const marginX = () => (
  <div className="border border-purple-800">
    <Margin xAxis="6">{lorem}</Margin>
  </div>
);

export const marginY = () => (
  <div className="border border-purple-800">
    <Margin yAxis="8">{lorem}</Margin>
  </div>
);
