import React from 'react';
import Grid from '@mui/material/Grid';
import SelectedItemLayout from '../../../../components/layouts/SelectedItemLayout';
import PropTypes from 'prop-types';
import SelectedItemBadge from '../SelectedItemBadge';
import RegularPricingItem from './RegularPricingItem';
import CustomPricingItem from './CustomPricingItem';

const PricingItemWrapper = ({ pricingItem, pageTitle }) => {
  const getPricingItem = () => {
    if (pricingItem.isCustom) {
      return <CustomPricingItem pricingItem={pricingItem} />;
    }
    return (
      <RegularPricingItem pricingItem={pricingItem} pageTitle={pageTitle} />
    );
  };

  if (pricingItem.isSelected) {
    return (
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} zIndex={1}>
          <SelectedItemBadge badge={pricingItem.badge} />
        </Grid>
        <Grid item xs={12} zIndex={2}>
          <SelectedItemLayout>{getPricingItem()}</SelectedItemLayout>
        </Grid>
      </Grid>
    );
  }
  return getPricingItem();
};

PricingItemWrapper.prototype = {
  pricingItem: PropTypes.objectOf(
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
  pageTitle: PropTypes.string,
};

export default PricingItemWrapper;
