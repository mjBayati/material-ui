import background from '../../images/pricing-cta/backLg.jpg';
import backgroundTablet from '../../images/pricing-cta/backMd.jpg';
import backgroundMobile from '../../images/pricing-cta/backXs.jpg';
import Grid from '@mui/material/Grid';
import React from 'react';
import PropTypes from 'prop-types';

const PricingCtaBackLayout = ({ children }) => {
  return (
    <Grid
      container
      position="relative"
      alignItems="center"
      style={{
        backgroundRepeat: 'no-repeat',
      }}
      sx={(theme) => ({
        [theme.breakpoints.up('lg')]: {
          backgroundImage: `url(${background})`,
          paddingY: 5.75,
          paddingX: 8,
          borderRadius: 3,
          backgroundSize: 'cover',
        },
        [theme.breakpoints.between('md', 'lg')]: {
          backgroundImage: `url(${background})`,
          paddingY: 5.75,
          paddingX: 8,
          borderRadius: 3,
          backgroundSize: 'cover',
        },
        [theme.breakpoints.between('sm', 'md')]: {
          backgroundImage: `url(${backgroundTablet})`,
          paddingY: 4,
          paddingX: 2,
          borderRadius: 3,
          backgroundSize: 'cover',
        },
        [theme.breakpoints.down('sm')]: {
          backgroundImage: `url(${backgroundMobile})`,
          paddingY: 2.5,
          paddingX: 2.5,
          borderRadius: 3,
          backgroundSize: 'cover',
        },
      })}
    >
      {children}
    </Grid>
  );
};

PricingCtaBackLayout.propTypes = {
  children: PropTypes.element,
};

export default PricingCtaBackLayout;
