import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { useRef } from 'react';
import SlickCarousel from './SlickCarousel';
import NextArrowCarousel from './NextArrowCarousel';
import PrevArrowCarousel from './PrevArrowCarousel';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTheme } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CircleNavButtonCarousel = ({ items, pageElementsIn }) => {
  const sliderRef = useRef();
  const theme = useTheme();

  return (
    <Grid
      container
      alignItems="stretch"
      justifyContent="center"
      spacing={{ md: 1, xs: 0 }}
      px={{ lg: 6, md: 6 }}
    >
      <Grid
        item
        md={12}
        xs={12}
        justifySelf="center"
        zIndex={1}
        order={{ lg: 2, md: 2, sm: 1, xs: 1 }}
      >
        <SlickCarousel
          ref={sliderRef}
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
              showDots: false,
            },
            xs: {
              slidesToShow: pageElementsIn.xs,
              showDots: false,
            },
          }}
          pageStyle={{
            paddingX: { sm: 1, xs: 0.5 },
            paddingTop: 1,
          }}
          arrows={true}
          nextArrowComponent={
            <NextArrowCarousel
              id="nextArrowBlogKB"
              icon={<ChevronRightIcon />}
              sx={{
                height: '40px !important',
                width: '40px !important',
                display: 'flex !important',
                position: 'absolute',
                backgroundColor:
                  theme.palette.primary.contrastText + '!important',
                color: theme.palette.primary.main + '!important',
                right: '-45px !important',
                left: { md: 'initial', xs: '80px' },
                top: {
                  md: '50% !important',
                  xs: 'calc(100% + 40px) !important',
                },
                '&: hover': {
                  backgroundColor: theme.palette.primary.main + '!important',
                  color: theme.palette.background.default + '!important',
                },
                '&.slick-disabled': {
                  pointerEvents: 'none',
                },
              }}
            />
          }
          prevArrowComponent={
            <PrevArrowCarousel
              id="prevArrowBlogKB"
              icon={<ChevronLeftIcon />}
              sx={{
                height: '40px !important',
                width: '40px !important',
                display: 'flex !important',
                position: 'absolute',
                backgroundColor:
                  theme.palette.primary.contrastText + '!important',
                color: theme.palette.primary.main + '!important',
                left: { md: '-45px !important', xs: '10px !important' },
                top: {
                  md: '50% !important',
                  xs: 'calc(100% + 40px) !important',
                },
                '&: hover': {
                  backgroundColor: theme.palette.primary.main + '!important',
                  color: theme.palette.background.default + '!important',
                },
                '&.slick-disabled': {
                  pointerEvents: 'none',
                },
              }}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

CircleNavButtonCarousel.prototype = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  pageElementsIn: PropTypes.shape({
    lg: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number.isRequired,
    md: PropTypes.number,
  }).isRequired,
};

export default CircleNavButtonCarousel;
