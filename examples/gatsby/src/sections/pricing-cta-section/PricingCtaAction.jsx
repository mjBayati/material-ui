import React from 'react';
import Grid from '@mui/material/Grid';
import CustomButton from '../../components/button/CustomButton';
import PropTypes from "prop-types";

const PricingCtaAction = ({ action }) => {
  return (
    <Grid
      container
      justifyContent={{ lg: 'right', md: 'right', sm: 'center', xs: 'center' }}
    >
      <Grid item lg={4.7} md={5.7} sm={7} xs={12}>
        <CustomButton
          id="LetsTalkCta"
          variant="contained"
          color="secondary"
          navigationObject={action}
          contentText={action.text}
          sx={{ width: '100%' }}
        />
      </Grid>
    </Grid>
  );
};

PricingCtaAction.propTypes = {
  action: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired
}

export default PricingCtaAction;
