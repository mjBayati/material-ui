import React from 'react';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const AmountAndUnitOfSpec = ({ amount, unit }) => {
  return (
    <Grid container spacing={0.5} alignItems={'center'}>
      <Grid item>
        <Typography variant={'body1'}>{amount}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{unit}</Typography>
      </Grid>
    </Grid>
  );
};

AmountAndUnitOfSpec.prototype = {
  amount: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
};

const SpecElement = ({ specElement }) => {
  return (
    <Grid container alignItems="flex-end" spacing={1}>
      <Grid item display={'flex'} pb={0.5}>
        <CheckIcon
          sx={(theme) => ({
            color:
              specElement.amount.toLowerCase() === 'custom'
                ? theme.palette.success.main
                : theme.palette.text.primary,
            fontSize: 16,
            fontWeight: 800,
          })}
        />
      </Grid>
      <Grid item>
        <AmountAndUnitOfSpec
          amount={specElement.amount}
          unit={specElement.unit}
        />
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.text.secondary,
          })}
        >
          {specElement.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

SpecElement.prototype = {
  specElement: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }),
};

const PricingItemPlanSpec = ({ planSpec }) => {
  return (
    <Grid container spacing={1.5}>
      {planSpec.map((specElement) => (
        <Grid item xs={12} key={specElement.key}>
          <SpecElement specElement={specElement} />
        </Grid>
      ))}
    </Grid>
  );
};

PricingItemPlanSpec.prototype = {
  planSpec: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ),
};

export default PricingItemPlanSpec;
