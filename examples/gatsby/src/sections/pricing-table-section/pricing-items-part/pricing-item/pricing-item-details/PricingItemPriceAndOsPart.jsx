import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import OsImage from './OsImage';
import PropType from 'prop-types';
import CustomHorizontalDivider from '../../../../../components/divider/CustomHorizontalDivider';

const PerMonthPricePart = ({ price }) => {
  return (
    <Grid
      container
      flexWrap={'nowrap'}
      justifyContent="start"
      alignItems="center"
      spacing={0.5}
    >
      <Grid item>
        <Typography variant="h5">{price.unit}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">{price.price}</Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          sx={(theme) => ({
            color: theme.palette.grey['300'],
          })}
        >
          /{price.period}
        </Typography>
      </Grid>
    </Grid>
  );
};

PerMonthPricePart.prototype = {
  price: {
    unit: PropType.string.isRequired,
    price: PropType.string.isRequired,
    period: PropType.string.isRequired,
  },
};

const BilledAnnuallyPricePart = ({ price }) => {
  return (
    <Grid container justifyContent="center" alignItems="flex-end" spacing={0.5}>
      <Grid item>
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.grey['400'], lineHeight: 1.5 }}
        >
          or
        </Typography>
      </Grid>
      <Grid item display="flex" justifyContent="center" alignItems="flex-end">
        <Typography
          variant="subtitle2"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            marginRight: 0.1,
            lineHeight: 1.5,
          }}
        >
          {price.unit}
          {price.price}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.grey['400'], lineHeight: 1.5 }}
        >
          billed annually
        </Typography>
      </Grid>
    </Grid>
  );
};

BilledAnnuallyPricePart.prototype = {
  price: {
    unit: PropType.string.isRequired,
    price: PropType.string.isRequired,
    period: PropType.string.isRequired,
  },
};

const PricingItemPriceAndOsPart = ({ pricing, os, isSelected }) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <CustomHorizontalDivider />
      </Grid>
      <Grid item xs={12} mt={{ lg: 3, md: 2.5, sm: 3, xs: 2 }}>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <PerMonthPricePart price={pricing.perMonth} />
          </Grid>
          <Grid item>
            <OsImage path={os.icon} alt={os.name} isSelected={isSelected} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={2}>
        <BilledAnnuallyPricePart price={pricing.billedAnnually} />
      </Grid>
    </Grid>
  );
};

PricingItemPriceAndOsPart.propTypes = {
  pricing: PropType.shape({
    perMonth: PropType.shape({
      unit: PropType.string.isRequired,
      price: PropType.string.isRequired,
      period: PropType.string.isRequired,
    }),
    billedAnnually: PropType.shape({
      period: PropType.string.isRequired,
      price: PropType.string.isRequired,
      unit: PropType.string.isRequired,
    }),
  }),
  os: PropType.shape({
    name: PropType.string.isRequired,
    icon: PropType.string.isRequired,
  }),
  isSelected: PropType.bool,
};

export default PricingItemPriceAndOsPart;
