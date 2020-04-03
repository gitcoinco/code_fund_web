import React from "react";

import { Image } from "./Image.jsx";
import CodefundLogo from "../../img/logos/codefund.svg";

export default {
  title: "Image",
  component: Image,
  parameters: {
    info: { inline: false },
  },
};

export const tile = () => (
  <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
);

export const display = () => (
  <Image src="https://bit.ly/2QvN4TH" alt="Motorcycle Racing" type="display" />
);
