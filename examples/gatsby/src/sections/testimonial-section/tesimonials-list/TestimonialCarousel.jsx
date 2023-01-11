import PropTypes from 'prop-types';
import React from 'react';
import SlickCarousel from "../../../components/carousel/SlickCarousel";

const TestimonialCarousel = ({ pages }) => {
  return (
    <SlickCarousel
      responsivenessSetting={{
          lg: {
          slidesToShow: 1,
          showDots: true,
        },
        md: {
          slidesToShow: 1,
          showDots: true,
        },
        sm: {
          slidesToShow: 1,
          showDots: true,
        },
        xs: {
          slidesToShow: 1,
          showDots: true,
        }
      }}
      items={pages}
    />
  );
};

TestimonialCarousel.prototype = {
  pages: PropTypes.element,
};

export default TestimonialCarousel;
