import React from "react";

import { Divider } from "./Divider.jsx";
import { Heading } from "./Heading.jsx";

export default {
  title: "Divider",
  component: Divider,
  parameters: {
    info: { inline: false }
  }
};

export const base = () => (
  <>
    <Heading level="1">H1 heading</Heading>
    <Divider />
    <Heading level="1">H1 heading</Heading>
  </>
);
