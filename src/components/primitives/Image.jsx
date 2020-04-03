import React from "react";
import PropTypes from "prop-types";

const Image = ({ type, src, alt }) => {
  const classes = (t) => {
    switch (t) {
      case "avatar":
        return "h-12 rounded-full";
      case "tile":
        return "max-h-12";
      case "display":
        return "w-full";
      case "cover":
        return "object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full";
      default:
        return "w-auto h-8 sm:h-10";
    }
  };

  return <img className={classes(type)} src={src} alt={alt} />;
};

Image.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  type: "tile",
  src: "#",
  alt: "alt text",
};

export { Image };
