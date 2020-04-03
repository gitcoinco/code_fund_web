import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Box } from "./primitives/Box.jsx";
import { Image } from "./primitives/Image.jsx";
// import { Text } from "./primitives/Text.jsx";

const Testimonials = ({ testimonials }) => {
  return (
    <Box base="bg-indigo-800">
      <Box base="max-w-screen-xl mx-auto" md="grid grid-cols-3 px-6" lg="px-8">
        {testimonials.map(testimonial => (
          <article key={v4()}>
            <Box
              base="px-4 py-12 px-6"
              md="flex flex-col py-16 pl-0 pr-10"
              lg="pr-16"
            >
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
                  base="relative text-lg font-medium leading-7 text-white"
                  md="flex-grow"
                >
                  {/* Comma */}
                  <svg
                    className="absolute top-0 left-0 w-8 h-8 text-indigo-600 transform -translate-x-3 -translate-y-2"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  {/* /Comma */}
                  <Box base="text-white">{testimonial.quote}</Box>
                </Box>
                <Box component="Footer" base="mt-8">
                  <Box base="text-base font-medium leading-6 text-white">
                    {testimonial.author.name}
                  </Box>
                  <Box base="text-base font-medium leading-6 text-indigo-200">
                    {testimonial.author.title},
                    <a href={testimonial.author.company.url}>{testimonial.author.company.name}</a>
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
          logo: PropTypes.string
        })
      })
    })
  )
};

export default Testimonials;
