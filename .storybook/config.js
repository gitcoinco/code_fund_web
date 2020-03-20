import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

// this is required, otherwise storybook won't properly load tailwind
import "../src/styles/main.css";

const Decorator = storyFn => (
  <div className="min-h-full bg-gray-100 border border-orange-500">
    <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-none">
        {/* ⬇️ COMPONENT ⬇️ */}
        {storyFn()}
        {/* ⬆️ COMPONENT ⬆️ */}
      </div>
    </div>
  </div>
);

addDecorator(withInfo);
addDecorator(Decorator);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};
