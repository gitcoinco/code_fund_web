import React from "react";

import { Box } from "./Box.jsx";
import { Stack } from "./Stack.jsx";

export default {
  title: "Stack",
  component: Stack,
  parameters: {
    info: { inline: false }
  }
};

export const base = () => (
  <Box classNames="bg-blue-400">
    <Stack space="xl">
      <Box classNames="h-12 w-12 mx-auto bg-red-400"></Box>
    </Stack>
  </Box>
);
