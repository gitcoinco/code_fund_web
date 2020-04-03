import React from "react";

import { Button } from ".";

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: { inline: false },
  },
};

export const simple = () => <Button>Click Me</Button>;
