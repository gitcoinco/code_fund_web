import React from "react";
import { Image } from "../primitives/Image.jsx";
import CodefundLogo from "../../img/logos/codefund.svg";

import { Tile, TileGrid } from ".";

export default {
  title: "Tile",
  component: Tile,
  parameters: {
    info: { inline: false },
  },
};

export const base = () => (
  <Tile>
    <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
  </Tile>
);

export const baseContainer = () => (
  <TileGrid>
    {[...Array(6)].map((e, i) => (
      <Tile key={i}>
        <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
      </Tile>
    ))}
  </TileGrid>
);

export const largeContainer = () => (
  <TileGrid columns={2} mdColumns={4} lgColumns={6}>
    <Tile colspan={2}>
      <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
    </Tile>
    <Tile>
      <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
    </Tile>
    <Tile colspan={2}>
      <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
    </Tile>
    <Tile>
      <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
    </Tile>
    <Tile colspan={1}>
      <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
    </Tile>
    <Tile colspan={5}>
      <Image src={CodefundLogo} alt="CodeFund Logo" type="tile" />
    </Tile>
  </TileGrid>
);
