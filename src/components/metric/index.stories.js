import React from "react";

import { MetricGrid, Metric } from ".";

export default {
  title: "Metric",
  component: Metric,
  parameters: {
    info: { inline: false },
  },
};

export const base = () => <Metric />;

export const baseContainer = () => (
  <MetricGrid>
    <Metric quantity="196" unit="Properties" />
    <Metric quantity="45" unit="Campaigns" />
    <Metric quantity="0.21%" unit="Avg. Click Rate" />
  </MetricGrid>
);

export const largeContainer = () => (
  <MetricGrid columns={6}>
    <Metric quantity="1" />
    <Metric quantity="2" />
    <Metric quantity="3" />
    <Metric quantity="4" />
    <Metric quantity="5" />
    <Metric quantity="6" />
  </MetricGrid>
);
