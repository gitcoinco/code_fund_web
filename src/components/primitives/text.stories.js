import React from "react";

import { Text } from "./Text.jsx";

const lorem = `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`;
export default {
  title: "Text",
  component: Text,
  parameters: {
    info: { inline: false },
  },
};

export const element = () => (
  <Text element="strong">This is a strong element</Text>
);

export const defaultText = () => <Text>{lorem}</Text>;

export const alignText = () => <Text align="center">{lorem}</Text>;

export const colorText = () => <Text color="blue">{lorem}</Text>;

export const font = () => <Text font="sans-serif">{lorem}</Text>;

export const size = () => <Text size="xl">{lorem}</Text>;

export const weight = () => <Text weight="bold">{lorem}</Text>;

export const leading = () => <Text leading="loose">{lorem}</Text>;
