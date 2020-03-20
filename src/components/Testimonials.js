import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Box } from "./primitives/Box.jsx";
import { Blockquote } from "./blockquote/Blockquote.jsx";
import { Card, CardBody, CardFooter } from "./card/index";

const Testimonials = ({ testimonials }) => {
  return (
    <Box classNames="flex">
      {testimonials.map(testimonial => (
        <article key={v4()}>
          <Card bgColor="gray-800" textColor="white">
            <CardBody>
              <Blockquote quote={testimonial.quote} />
            </CardBody>
            <CardFooter>
              <cite> – {testimonial.author}</cite>
            </CardFooter>
          </Card>
        </article>
      ))}
    </Box>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string
    })
  )
};

export default Testimonials;
