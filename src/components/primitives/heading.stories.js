import React from "react";

import { Heading } from "./Heading.jsx";
import { Box } from "./Box.jsx";
import { Stack } from "./Stack.jsx";

export default {
  title: "Heading",
  component: Heading,
  parameters: {
    info: { inline: false }
  }
};

export const all = () => (
  <Stack space="sm">
    <Box classNames="flex flex-col">
      <Stack space="sm">
        <Heading level="1">H1 heading</Heading>
      </Stack>
      <Stack space="sm">
        <Heading level="2">H2 heading</Heading>
      </Stack>
      <Stack space="sm">
        <Heading level="3">H3 heading</Heading>
      </Stack>
      <Stack space="sm">
        <Heading level="4">H4 heading</Heading>
      </Stack>
      <Stack space="sm">
        <Heading level="5">H5 heading</Heading>
      </Stack>
    </Box>
  </Stack>
);

export const base = () => <Heading>H1 heading</Heading>;

export const h1 = () => <Heading level="1">H1 heading</Heading>;

export const h2 = () => <Heading level="2">H2 heading</Heading>;

export const h3 = () => <Heading level="3">H3 heading</Heading>;

export const h4 = () => <Heading level="4">H4 heading</Heading>;

export const h5 = () => <Heading level="5">H5 heading</Heading>;
