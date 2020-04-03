import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  // const imageStyle = { borderRadius: "5px" };
  // const imageClasses = "";
  const { alt = "", classes = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img className={classes} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (!childImageSharp) {
    return <Img className={classes} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === "string")
    return <img className={classes} src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    classes: PropTypes.string,
  }).isRequired,
};

export default PreviewCompatibleImage;
