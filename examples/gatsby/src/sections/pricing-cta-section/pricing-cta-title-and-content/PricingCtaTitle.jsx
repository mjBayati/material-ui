import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import PropTypes from "prop-types";

const PricingCtaTitle = ({title}) => {
  return (
    <Grid container justifyContent={{ lg: 'flex-start', md: 'flex-start', sx: 'center', xs: 'center' }}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="h4"
          component="h2"
          sx={(theme) => ({
            color: theme.palette.white.default,
          })}
        >
            {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

PricingCtaTitle.prototype = {
    title: PropTypes.string.isRequired,
}

export default PricingCtaTitle;
