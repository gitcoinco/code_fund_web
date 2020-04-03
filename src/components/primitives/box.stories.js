import React from "react";

import { Box } from "./Box.jsx";
import { Image } from "./Image.jsx";
import CodefundLogo from "../../img/logos/codefund.svg";

export default {
  title: "Box",
  component: Box,
  parameters: {
    info: { inline: false },
  },
};

export const base = () => (
  <Box>
    <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
  </Box>
);
