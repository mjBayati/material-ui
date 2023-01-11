import React from 'react';
import Grid from '@mui/material/Grid';
import PricingCtaTitle from './PricingCtaTitle';
import PricingCtaContent from './PricingCtaContent';
import PropTypes from "prop-types";

const PricingCtaTitleAndContent = ({title, description}) => {
  return (
    <Grid container justifyContent={{
      lg: 'flex-start',
      md: 'flex-start',
      sm: 'center',
      xs: 'center'
    }}
      spacing={{ lg: 2, md: 2, sm: 1, xs: 1 }}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <PricingCtaTitle title={title}/>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <PricingCtaContent description={description}/>
      </Grid>
    </Grid>
  );
};

PricingCtaTitleAndContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default PricingCtaTitleAndContent;
