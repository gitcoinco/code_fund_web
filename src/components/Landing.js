import PropTypes from "prop-types";
import React from "react";
import { Text } from "./primitives/Text.jsx";
import { Heading } from "./primitives/Heading.jsx";
import { Image } from "./primitives/Image.jsx";
import { Box } from "./primitives/Box.jsx";
import { ButtonLink } from "./button/ButtonLink.jsx";

const Landing = ({ image, title, subtitle, copy }) => (
  <Box base="relative bg-white overflow-hidden">
    <Box base="max-w-screen-xl mx-auto">
      <Box
        base="relative z-10 pb-8 bg-white"
        sm="pb-16"
        md="pb-20"
        lg="max-w-2xl w-full pb-28"
        xl="pb-32"
      >
        <Box
          base="max-w-screen-xl px-4 mx-auto mt-10"
          sm="mt-12 px-6"
          md="mt-16"
          lg="mt-20 px-8"
          xl="mt-28"
        >
          <Box base="text-center" lg="text-left">
            <Heading size="1">{title}</Heading>
            <Heading size="3">{subtitle}</Heading>
            <Text>{copy}</Text>
            <Box base="mt-5" sm="mt-8 flex justify-center" lg="justify-start">
              <Box base="rounded-md shadow">
                <ButtonLink>Get Started</ButtonLink>
              </Box>
              <Box base="mt-3" sm="mt-0 ml-3">
                <ButtonLink>Live demo</ButtonLink>
              </Box>
            </Box>
          </Box>
        </Box>
        <svg
          className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </Box>
    </Box>
    <Box lg="absolute inset-y-0 right-0 w-1/2">
      <Image src={image} alt="CodeFund Dashboard UI" type="cover" />
    </Box>
  </Box>
);

Landing.propTypes = {
  image: PropTypes.any,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  copy: PropTypes.string,
};

export default Landing;
