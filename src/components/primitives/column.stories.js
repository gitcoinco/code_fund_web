import React from "react";

import { Box } from "./Box.jsx";
import { Stack } from "./Stack.jsx";
import { Columns } from "./Columns.jsx";
import { Column } from "./Column.jsx";

export default {
  title: "Column",
  component: Column,
  parameters: {
    info: { inline: false }
  }
};

export const base = () => (
  <Stack classNames="bg-blue-800">
    <Columns space="auto">
      <Column width="1/3" space="lg">
        <Box classNames="h-48 w-48 mx-auto bg-red-400"></Box>
      </Column>
      <Column width="1/3" space="lg">
        <Box classNames="h-48 w-48 mx-auto bg-red-400"></Box>
      </Column>
      <Column width="1/3" space="lg">
        <Box classNames="h-48 w-48 mx-auto bg-red-400"></Box>
      </Column>
    </Columns>
  </Stack>
);
