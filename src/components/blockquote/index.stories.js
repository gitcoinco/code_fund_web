import React from "react";

import { Blockquote } from ".";

export default {
  title: "Blockquote",
  component: Blockquote,
  parameters: {
    info: { inline: false },
  },
};

export const full = () => (
  <div className="bg-indigo-800">
    <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">
        <Blockquote
          quote="Were seeing really good sign up rates from our end up CodeFund… much better than any of our other campaigns."
          authorName="Tim Lucas"
          authorTitle="Founder"
          authorOrganization="Buildkite"
          authorUrl={`https://bit.ly/2UlOukJ`}
        />
      </div>
    </div>
  </div>
);

export const base = () => <Blockquote />;
