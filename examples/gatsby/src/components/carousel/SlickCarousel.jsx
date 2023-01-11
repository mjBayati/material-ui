import Box from '@mui/material/Box';
import React from 'react';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@mui/material/styles';
import * as styles from './CustomCarousel.module.css';

const SlickCarousel = forwardRef(
  (
    {
      responsivenessSetting,
      items,
      pageStyle,
      carouselContainerClass,
      slidesToScroll,
      arrows,
      prevArrowComponent,
      nextArrowComponent,
    },
    sliderRef,
  ) => {
    const theme = useTheme();
    return (
      <Slider
        dotsClass={styles.dotsClass}
        ref={sliderRef}
        infinite={false}
        speed={500}
        nextArrow={arrows ? nextArrowComponent : null}
        prevArrow={arrows ? prevArrowComponent : null}
        slidesToShow={
          process.env.GATSBY_SCREEN_WIDTH < 600 &&
          responsivenessSetting.xs.slidesToShow
            ? responsivenessSetting.xs.slidesToShow
            : responsivenessSetting.lg.slidesToShow
        }
        dots={
          process.env.GATSBY_SCREEN_WIDTH < 600 &&
          responsivenessSetting.xs.showDots
            ? responsivenessSetting.xs.showDots
            : responsivenessSetting.lg.showDots
        }
        slidesToScroll={slidesToScroll || 1}
        arrows={arrows}
        autoplay={false}
        autoplaySpeed={5000}
        className={carouselContainerClass || styles.carouselContainer}
        initialSlide={0}
        responsive={[
          {
            breakpoint: theme.breakpoints.values.xl,
            settings: {
              slidesToShow: responsivenessSetting.lg.slidesToShow,
              dots: responsivenessSetting.lg.showDots,
              slidesToScroll: responsivenessSetting.lg.slidesToScroll || 1,
            },
          },
          {
            breakpoint: theme.breakpoints.values.lg,
            settings: {
              slidesToShow: responsivenessSetting.md?.slidesToShow,
              dots: responsivenessSetting.md?.showDots,
              slidesToScroll: responsivenessSetting.md?.slidesToScroll || 1,
            },
          },
          {
            breakpoint: theme.breakpoints.values.md,
            settings: {
              slidesToShow: responsivenessSetting.sm?.slidesToShow,
              dots: responsivenessSetting.sm?.showDots,
              slidesToScroll: responsivenessSetting.sm?.slidesToScroll || 1,
            },
          },
          {
            breakpoint: theme.breakpoints.values.sm,
            settings: {
              slidesToShow: responsivenessSetting.xs?.slidesToShow,
              dots: responsivenessSetting.xs?.showDots,
              slidesToScroll: responsivenessSetting.xs?.slidesToScroll || 1,
            },
          },
        ]}
      >
        {items.map((item, index) => {
          return (
            <Box sx={pageStyle} key={index}>
              {item}
            </Box>
          );
        })}
      </Slider>
    );
  },
);

SlickCarousel.prototype = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  responsivenessSetting: PropTypes.shape({
    lg: PropTypes.objectOf(
      PropTypes.shape({
        slidesToShow: PropTypes.number.isRequired,
        showDots: PropTypes.bool,
      }),
    ).isRequired,
    sm: PropTypes.objectOf(
      PropTypes.shape({
        slidesToShow: PropTypes.number.isRequired,
        showDots: PropTypes.bool,
      }),
    ),
    xs: PropTypes.objectOf(
      PropTypes.shape({
        slidesToShow: PropTypes.number.isRequired,
        showDots: PropTypes.bool,
      }),
    ),
    md: PropTypes.objectOf(
      PropTypes.shape({
        slidesToShow: PropTypes.number.isRequired,
        showDots: PropTypes.bool,
      }),
    ),
  }).isRequired,
  pageStyle: PropTypes.object,
  carouselContainerClass: PropTypes.string.isRequired,
  slidesToScroll: PropTypes.number,
  arrows: PropTypes.bool,
  prevArrowComponent: PropTypes.element,
  nextArrowComponent: PropTypes.element,
};

export default SlickCarousel;
