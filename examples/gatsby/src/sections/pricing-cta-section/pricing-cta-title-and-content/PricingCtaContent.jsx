import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import PropTypes from "prop-types";

const PricingCtaContent = ({description}) => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.grey['A400'],
          })}

        >
            {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

PricingCtaContent.propTypes = {
    description: PropTypes.string.isRequired,
}

export default PricingCtaContent;
