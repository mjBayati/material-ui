import React from 'react';
import Grid from '@mui/material/Grid';
import PricingCtaBackLayout from './PricingCtaBackLayout';
import PricingCtaWrapper from './PricingCtaWrapper';
import PropTypes from 'prop-types';

const PricingCtaSection = ({ pt, data }) => {
  return (
    <Grid container mb={-12} pt={pt}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <PricingCtaBackLayout>
          <PricingCtaWrapper data={data} />
        </PricingCtaBackLayout>
      </Grid>
    </Grid>
  );
};

PricingCtaSection.propTypes = {
  pt: PropTypes.object,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PricingCtaSection;
