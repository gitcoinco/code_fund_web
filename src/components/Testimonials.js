import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Box } from "./primitives/Box.jsx";
import { Image } from "./primitives/Image.jsx";
import Comma from "./icons/Comma";
import { Text } from "./primitives/Text.jsx";

const Testimonials = ({ testimonials }) => {
  return (
    <Box base="bg-white">
      <Box base="max-w-screen-xl mx-auto" md="grid grid-cols-3 px-6" lg="px-8">
        {testimonials.map((testimonial) => (
          <article key={v4()}>
            <Box base="px-4 py-12" md="flex flex-col py-16" lg="">
              <Box md="md:flex-shrink-0">
                <Image
                  src={testimonial.author.company.logo}
                  alt="CodeFund Dashboard UI"
                  type="logo"
                />
              </Box>
              <Box
                component="blockquote"
                base="mt-8"
                md="flex-grow flex flex-col"
              >
                <Box
                  base="relative text-lg font-medium leading-7 text-gray-900"
                  md="flex-grow"
                >
                  <Comma />
                  <Text base="z-50">{testimonial.quote}</Text>
                </Box>
                <Box component="Footer" base="mt-8">
                  <Box base="text-base font-medium leading-6 text-gray-900">
                    {testimonial.author.name}
                  </Box>
                  <Box base="text-base font-medium leading-6 text-indigo-200">
                    {testimonial.author.title},
                    <a href={testimonial.author.company.url}>
                      {testimonial.author.company.name}
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </article>
        ))}
      </Box>
    </Box>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        company: PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string,
          logo: PropTypes.string,
        }),
      }),
    })
  ),
};

export default Testimonials;
