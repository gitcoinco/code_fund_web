import React from "react";

import { Padding } from "./Padding.jsx";

const lorem = `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`;
export default {
  title: "Padding",
  component: Padding,
  parameters: {
    info: { inline: false },
  },
};

export const padding = () => (
  <div className="border border-purple-800">
    <Padding all="4">{lorem}</Padding>
  </div>
);

export const paddingTop = () => (
  <div className="border border-purple-800">
    <Padding top="6">{lorem}</Padding>
  </div>
);

export const paddingRight = () => (
  <div className="border border-purple-800">
    <Padding right="3">{lorem}</Padding>
  </div>
);

export const paddingBottom = () => (
  <div className="border border-purple-800">
    <Padding bottom="4">{lorem}</Padding>
  </div>
);

export const paddingLeft = () => (
  <div className="border border-purple-800">
    <Padding left="6">{lorem}</Padding>
  </div>
);

export const paddingX = () => (
  <div className="border border-purple-800">
    <Padding xAxis="6">{lorem}</Padding>
  </div>
);

export const paddingY = () => (
  <div className="border border-purple-800">
    <Padding yAxis="6">{lorem}</Padding>
  </div>
);
