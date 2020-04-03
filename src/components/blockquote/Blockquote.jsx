import React from "react";
import PropTypes from "prop-types";
// import { Image } from "../primitives/Image.jsx";
// import { BlockquoteFooter } from "./BlockquoteFooter.jsx";

const Blockquote = ({
  quote,
  // authorName,
  // authorTitle,
  // authorOrganization,
  // authorUrl
}) => (
  <blockquote className="mt-8 md:flex-grow md:flex md:flex-col">
    <div className="relative text-lg font-medium leading-7 md:flex-grow">
      <svg
        className="absolute top-0 left-0 w-8 h-8 text-indigo-600 transform -translate-x-3 -translate-y-2"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="relative">{quote}</p>
    </div>
    {/* <BlockquoteFooter>
      <div className="inline-flex flex-shrink-0 border-2 border-white rounded-full">
        <Image src={authorUrl} type="avatar" circle />
      </div>
      <div className="mt-4 md:ml-4 md:mt-0">
        <div className="text-base font-medium leading-6 text-white">
          {authorName}
        </div>
        <div className="text-base font-medium leading-6 text-indigo-200">
          {authorTitle}, <a href={authorUrl}>{authorOrganization}</a>
        </div>
      </div>
    </BlockquoteFooter> */}
  </blockquote>
);

Blockquote.propTypes = {
  quote: PropTypes.string,
  authorName: PropTypes.string,
  authorTitle: PropTypes.string,
  authorOrganization: PropTypes.string,
  authorUrl: PropTypes.string,
};

Blockquote.defaultProps = {
  quote: "",
  authorName: "",
  authorTitle: "",
  authorOrganization: "",
  authorUrl: "codefund.io",
};

export { Blockquote };
