import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import PricingItemHeadingPart from './pricing-item-details/PricingItemHeadingPart';
import PricingItemPlanSpec from './pricing-item-details/PricingItemPlanSpec';
import PricingItemPriceAndOsPart from './pricing-item-details/PricingItemPriceAndOsPart';
import GetStartedAction from './pricing-item-details/GetStartedAction';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FrontMatterContext from '../../../../context/FrontMatter.context';
import DistroToOsMapperData from '../../data/distroToOsMapper.data';

const RegularPricingItem = ({ pricingItem, pageTitle }) => {
  const slug = useContext(FrontMatterContext).slug;
  const pricingActionNavigationObject = {
    remoteLink: `${
      pricingItem.action.remoteLink
    }&slug=${slug}&osFamily=${DistroToOsMapperData.getOsByDistro(
      pricingItem.os.name,
    )}`,
  };
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
          <PricingItemHeadingPart
            title={pricingItem.title}
            subtitle={pageTitle}
          />
        </Grid>
        <Grid item xs={12} mt={{ lg: 3, md: 2.5, sm: 3, xs: 2 }}>
          <PricingItemPlanSpec planSpec={pricingItem.planSpec} />
        </Grid>
        <Grid item xs={12} mt={{ lg: 3, md: 2.5, sm: 3, xs: 2 }}>
          <PricingItemPriceAndOsPart
            pricing={pricingItem.pricing}
            os={pricingItem.os}
            isSelected={pricingItem.isSelected}
          />
        </Grid>
        <Grid item xs={12} mt={{ lg: 4, md: 2.5, sm: 4, xs: 2.5 }}>
          <GetStartedAction
            isSelected={pricingItem.isSelected}
            disabled={pricingItem.disabled}
            action={
              slug === 'cloud'
                ? pricingItem.action
                : pricingActionNavigationObject
            }
            os={pricingItem.os.name}
            price={pricingItem.pricing?.perMonth?.price}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

RegularPricingItem.propTypes = {
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

export default RegularPricingItem;
