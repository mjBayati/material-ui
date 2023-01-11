import React from 'react';
import Grid from '@mui/material/Grid';
import PricingItem from './pricing-item/PricingItemWrapper';
import PropTypes from 'prop-types';

const PricingItemsList = ({ pricingItems, pageTitle }) => {
  return (
    <Grid
      container
      spacing={{ lg: 2.5, md: 2.5, sm: 2, xs: 2 }}
      justifyContent="center"
      alignItems="flex-end"
    >
      {pricingItems.map((pricingItem) => (
        <Grid item lg={3} md={6} sm={6} xs={12} key={pricingItem.title + pricingItem.os.name + pricingItem.planSpec[2].amount}>
          <PricingItem pricingItem={pricingItem} pageTitle={pageTitle} />
        </Grid>
      ))}
    </Grid>
  );
};

PricingItemsList.prototype = {
  pageTitle: PropTypes.string,
  pricingItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      planSpec: PropTypes.object.isRequired,
      pricing: PropTypes.object,
      os: PropTypes.object,
      badge: PropTypes.string,
      isSelected: PropTypes.bool,
      isCustom: PropTypes.bool,
      action: PropTypes.objectOf(
        PropTypes.shape({
          remoteLink: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};

export default PricingItemsList;
