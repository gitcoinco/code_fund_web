import React from "react";

import { Box } from "./Box.jsx";
import { Columns } from "./Columns.jsx";

export default {
  title: "Columns",
  component: Columns,
  parameters: {
    info: { inline: false }
  }
};

export const base = () => (
  <Box classNames="bg-blue-400">
    <Columns>
      <Box classNames="h-48 w-48 mx-auto bg-red-400"></Box>
    </Columns>
  </Box>
);
