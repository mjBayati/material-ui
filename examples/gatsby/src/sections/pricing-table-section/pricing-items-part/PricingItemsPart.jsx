import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import PricingItemsList from './PricingItemsList';
// import ViewAllActionButton from '../../../components/button/ViewAllActionButton';
import PropTypes from 'prop-types';
import stringUtil from '../../../util/string.util';
import togglableEnum from '../enum/togglable.enum';

const PricingItemsPart = ({ selectedGroup, pricingItemsData, pageTitle }) => {
  // const getHiddenItems = () => {
  //   return selectedGroup === togglableEnum.NOT_APPLICABLE ? [] : pricingItemsData.filter((pricingItem) => pricingItem.os.name !== selectedGroup);
  // }

  const getPresentItems = () => {
    return selectedGroup === togglableEnum.NOT_APPLICABLE ? pricingItemsData : pricingItemsData.filter((pricingItem) => pricingItem.os.name === selectedGroup);
  }

  const [pricingItems, setPricingItems] = useState(getPresentItems());
  // const [hiddenPricingItems, setHiddenPricingItems] = useState(getHiddenItems());

  // useEffect(() => {
  //   setPricingItems(getPresentItems());
  //   setHiddenPricingItems(getHiddenItems());
  // }, [selectedGroup]);

  return (
    <Grid container item xs={12} mt={2} spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <PricingItemsList pricingItems={pricingItems} pageTitle={pageTitle} />
        {/* {hiddenPricingItems.length !== 0 && (
          <div style={{ display: 'none' }}>
              {stringUtil.serializeReactElement(<PricingItemsList pricingItems={hiddenPricingItems} pageTitle={pageTitle}/>)}
          </div>
        )} */}
      </Grid>
      {/* <Grid item xs={12} mt={2} display={'none'}>
        <ViewAllActionButton action={{ link: '/', text: 'View All' }} />
      </Grid> */}
    </Grid>
  );
};

PricingItemsPart.propTypes = {
  pageTitle: PropTypes.string,
  selectedGroup: PropTypes.string.isRequired,
  pricingItemsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      planSpec: PropTypes.array.isRequired,
      pricing: PropTypes.object,
      os: PropTypes.object,
      badge: PropTypes.string,
      isSelected: PropTypes.bool,
      isCustom: PropTypes.bool,
      action: PropTypes.shape({
        remoteLink: PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default PricingItemsPart;
