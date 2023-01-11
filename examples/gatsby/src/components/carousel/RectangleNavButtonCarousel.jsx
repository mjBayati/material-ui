import React from 'react';
import PropTypes from 'prop-types';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import { useRef } from 'react';
import SlickCarousel from './SlickCarousel';
import * as styles from './CustomCarousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrowCarousel from './NextArrowCarousel';
import PrevArrowCarousel from './PrevArrowCarousel';
import { useTheme } from '@mui/material/styles';

const RectangleNavButtonCarousel = ({ items, pageElementsIn }) => {
  const sliderRef = useRef();
  const theme = useTheme();

  return (
    <Grid container alignItems="stretch" justifyContent="center" spacing={1}>
      <Grid item md={11} xs={12} zIndex={1}>
        <SlickCarousel
          carouselContainerClass={styles.rectangleCarouselClass}
          items={items}
          responsivenessSetting={{
            lg: {
              slidesToShow: pageElementsIn.lg,
              showDots: false,
            },
            md: {
              slidesToShow: pageElementsIn.md,
              showDots: false,
            },
            sm: {
              slidesToShow: pageElementsIn.sm,
              showDots: true,
            },
            xs: {
              slidesToShow: pageElementsIn.xs,
              showDots: true,
            },
          }}
          pageStyle={{ paddingX: { md: 1, sm: 0.75, xs: 0.75 } }}
          ref={sliderRef}
          arrows={true}
          nextArrowComponent={
            <NextArrowCarousel
              icon={<ArrowForward />}
              sx={{
                height: '97% !important',
                borderRadius: '4px',
                width: '40px !important',
                position: 'absolute',
                alignItems: 'center',
                display: { md: 'flex !important', xs: 'none !important' },
                backgroundColor: theme.palette.primary.light + '!important',
                color: theme.palette.primary.main + '!important',
                top: '0 !important',
                transform: 'none !important',
                right: '-45px !important',

                '&.slick-disabled': {
                  pointerEvents: 'none',
                },
              }}
            />
          }
          prevArrowComponent={
            <PrevArrowCarousel
              icon={<ArrowBack />}
              sx={{
                height: '98% !important',
                borderRadius: '4px',
                width: '40px !important',
                backgroundColor: theme.palette.primary.light + '!important',
                color: theme.palette.primary.main + '!important',
                alignItems: 'center',
                position: 'absolute',
                display: { md: 'flex !important', xs: 'none !important' },
                top: '0 !important',
                transform: 'none !important',
                left: '-45px !important',

                '&.slick-disabled': {
                  pointerEvents: 'none',
                },
              }}
            />
          }
          sx={{
            height: '98% !important',
            borderRadius: '4px',
            width: '40px !important',
          }}
        />
      </Grid>
    </Grid>
  );
};

RectangleNavButtonCarousel.prototype = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  pageElementsIn: PropTypes.shape({
    lg: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number.isRequired,
    md: PropTypes.number,
  }).isRequired,
};

export default RectangleNavButtonCarousel;
