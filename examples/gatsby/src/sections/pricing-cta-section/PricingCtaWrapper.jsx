import React from 'react';
import Grid from '@mui/material/Grid';
import PricingCtaTitleAndContent from './pricing-cta-title-and-content/PricingCtaTitleAndContent';
import PricingCtaAction from './PricingCtaAction';
import PropTypes from "prop-types";
import CtaActionData from './data/pricingCtaAction.data';

const PricingCtaWrapper = ({data}) => {
  return (
    <Grid
      container
      flexDirection="row"
      justifyContent={{
        lg: 'space-between',
        md: 'space-between',
        sm: 'center',
        xs: 'center'
      }}
      alignItems="center"
      textAlign={{ lg: 'left', md: 'left', sm: 'center', xs: 'center' }}
      spacing={{ lg: 1, md: 2, sm: 1, xs: 1 }}
    >
      <Grid item lg={7.5} md={7} sm={12} xs={12}>
        <PricingCtaTitleAndContent title={data.title} description={data.description} />
      </Grid>
      <Grid item lg={4.5} md={5} sm={12} xs={12} textAlign={{ lg: 'right', md: 'right', sm: 'center' }}>
        <PricingCtaAction action={CtaActionData.action}/>
      </Grid>
    </Grid>
  );
};

PricingCtaWrapper.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
}

export default PricingCtaWrapper;
