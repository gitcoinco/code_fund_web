import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const FooterLinks = ({ title, links }) => {
  return (
    <>
      <h4 className="text-sm font-semibold leading-5 tracking-wider text-gray-400 uppercase">
        {title}
      </h4>
      <ul className="mt-4">
        {links.map((link) => (
          <li key={v4()} className="mt-4">
            <a
              href={link.url}
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

FooterLinks.propTypes = {
  title: PropTypes.string,
  links: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

FooterLinks.defaultProps = {
  title: "Title",
};

export default FooterLinks;
