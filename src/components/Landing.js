import PropTypes from "prop-types";
import React from "react";
import { Heading } from "./primitives/Heading.jsx";
import { Image } from "./primitives/Image.jsx";
import { Box } from "./primitives/Box.jsx";
import { ButtonLink } from "./button/ButtonLink.jsx";

const Landing = ({ image, title, subheading }) => (
  <Box classNames="relative overflow-hidden bg-white">
    <div className="max-w-screen-xl mx-auto ">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <div className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <Heading size="1">{title}</Heading>
            <Heading size="3">{subheading}</Heading>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <ButtonLink>Get Started</ButtonLink>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <ButtonLink>Live demo</ButtonLink>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Image src={image} alt="CodeFund Dashboard UI" type="cover" />
    </div>
  </Box>
);

Landing.propTypes = {
  image: PropTypes.any,
  subheading: PropTypes.string,
  title: PropTypes.string
};

export default Landing;
