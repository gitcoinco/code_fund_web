import React from "react";

import { Card, CardBody, CardFooter, CardHeader, CardTitle } from ".";

export default {
  title: "Card",
  component: Card,
  parameters: {
    info: { inline: false },
  },
};

export const full = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card title</CardTitle>
    </CardHeader>
    <CardBody>Card body</CardBody>
    <CardFooter>Card footer</CardFooter>
  </Card>
);

export const base = () => <Card>Base card</Card>;

export const withHeader = () => (
  <Card>
    <CardHeader>Card with header</CardHeader>
  </Card>
);

export const withTitle = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card with title</CardTitle>
    </CardHeader>
  </Card>
);

export const withBody = () => (
  <Card>
    <CardBody>Card with body</CardBody>
  </Card>
);

export const withFooter = () => (
  <Card>
    <CardFooter>Card with footer</CardFooter>
  </Card>
);
