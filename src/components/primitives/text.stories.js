import React from "react";

import { Text } from "./Text.jsx";
import { Box } from "./Box.jsx";
import { Stack } from "./Stack.jsx";

const lorem = `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`;
export default {
  title: "Text",
  component: Text,
  parameters: {
    info: { inline: false }
  }
};

export const all = () => (
  <Stack space="sm">
    <Box classNames="flex flex-col">
      <Stack space="sm">
        <Text>Default</Text>
      </Stack>
      <Stack space="sm">
        <Text size="small" align="left">
          Small
        </Text>
      </Stack>
      <Stack space="sm">
        <Text size="default" align="center">
          Default
        </Text>
      </Stack>
      <Stack space="sm">
        <Text size="strong" alight="right">
          Strong
        </Text>
      </Stack>
      <Stack space="sm">
        <Text size="span" align="center">
          Span
        </Text>
      </Stack>
    </Box>
  </Stack>
);

export const base = () => <Text>{lorem}</Text>;
export const small = () => <Text size="small">{lorem}</Text>;
export const strong = () => <Text size="strong">{lorem}</Text>;
export const span = () => <Text size="span">{lorem}</Text>;
