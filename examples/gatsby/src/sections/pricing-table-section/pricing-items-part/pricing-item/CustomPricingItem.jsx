import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import PricingItemPlanSpec from './pricing-item-details/PricingItemPlanSpec';
import GetStartedAction from './pricing-item-details/GetStartedAction';
import PropTypes from 'prop-types';
import CustomImage from '../../../../components/media/CustomImage';
import FixedLineTypography from '../../../../components/typography/FixedLineTypography';

const CustomPricingItem = ({ pricingItem }) => {
  return (
    <Card
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        boxShadow: theme.shadows['0.5'],
        borderRadius: 2,
      })}
    >
      <Grid container padding={{ lg: 2.5, md: 3, sm: 2.5, xs: 3 }}>
        <Grid item xs={12}>
          <FixedLineTypography
            variant="body2"
            textAlign={'center'}
            content={pricingItem.title}
            lineToShow={{ lg: 2, md: 3, sm: 3, xs: 3 }}
            visibleOnOverflow={true}
            color={'primary'}
          />
        </Grid>
        <Grid item xs={12} mt={{ lg: 3, md: 2.5, sm: 3, xs: 2 }}>
          <PricingItemPlanSpec planSpec={pricingItem.planSpec} />
        </Grid>
        <Grid
          item
          xs={12}
          mt={{ lg: 5.85, md: 2.5, sm: 3.75, xs: 3.75 }}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <CustomImage relativePath={'pricing-table-section/customPlan.svg'} />
        </Grid>
        <Grid item xs={12} mt={{ lg: 4.5, md: 2.25, sm: 3.75, xs: 3.75 }}>
          <GetStartedAction
            isSelected={pricingItem.isSelected}
            action={pricingItem.action}
            isCustom={pricingItem.isCustom}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

CustomPricingItem.prototype = {
  pricingItem: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      planSpec: PropTypes.object.isRequired,
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

export default CustomPricingItem;
