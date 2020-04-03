import PropTypes from "prop-types";
import React from "react";
import { Text } from "./primitives/Text.jsx";
import { Heading } from "./primitives/Heading.jsx";
import { Image } from "./primitives/Image.jsx";
import { Box } from "./primitives/Box.jsx";
import { Flex } from "./primitives/Flex.jsx";
import { ButtonLink } from "./button/ButtonLink.jsx";
import { Margin } from "./primitives/Margin.jsx";

const Troll = ({ image, heading, subheading, text }) => (
  <Box>
    <Padding yAxis="6">
      <Image src={image} alt="Troll Dashboard UI" type="cover" />
      <Margin top="2" bottom="2">
        <Heading size="1">{heading}</Heading>
        <Heading size="3">{subheading}</Heading>
      </Margin>
      <Text color="gray-800">{text}</Text>
      <Flex>
        <ButtonLink route="http://example.com">Get Started</ButtonLink>
        <ButtonLink route="http://example.com">Live demo</ButtonLink>
      </Flex>
    </Padding>
  </Box>
);

export default Troll;
