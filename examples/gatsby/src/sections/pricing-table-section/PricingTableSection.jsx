import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PricingItemsPart from './pricing-items-part/PricingItemsPart';
import Proptypes from 'prop-types';
import PricingData from './data/Pricing.data';
import CustomToggleButtonGroup from '../../components/toggle-button-group/CustomToggleButtonGroup';
import InfoIcon from '@mui/icons-material/Info';
import togglableEnum from './enum/togglable.enum';
import { getPageTitle } from './data/ManualPageTitleMapper.data';

const PricingTableSection = ({ pt, pricingDataKey, pageTitle }) => {
  const {
    isTogglable,
    data: pricingData,
    selectors,
  } = PricingData[pricingDataKey || PricingData.WINDOWS_VS_LINUX.key];
  const [selectedGroup, setSelectedGroup] = useState(
    isTogglable ? selectors[0] : togglableEnum.NOT_APPLICABLE,
  );
  const finalPageTitle = getPageTitle(pageTitle);

  return (
    <Grid
      pt={pt}
      container
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      spacing={2}
    >
      <Grid item xs={12} id="pricing">
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.text.secondary })}
        >
          No Hidden Fees - No Contract
        </Typography>
      </Grid>

      {isTogglable && (
        <Grid item xs={12}>
          <CustomToggleButtonGroup
            id="pricingTableToggleButton"
            selectedValue={selectedGroup}
            setSelectedValue={setSelectedGroup}
            leftButtonValue={selectors[0]}
            rightButtonValue={selectors[1]}
          />
        </Grid>
      )}

      <Grid item xs={12} mt={2}>
        <PricingItemsPart
          selectedGroup={selectedGroup}
          pricingItemsData={pricingData}
          pageTitle={finalPageTitle}
        />

        <Grid
          item
          xs={12}
          mt={4}
          display={'flex'}
          sx={{
            alignSelf: 'flex-start',
          }}
        >
          <InfoIcon
            sx={(theme) => ({
              color: theme.palette.primary.main,
            })}
          />
          <Typography
            variant="body1"
            sx={(theme) => ({ color: theme.palette.text.secondary })}
            ml={1}
          >
            Certain locations may come with lower CPU speed and 1Gbps
            connection.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

PricingTableSection.propTypes = {
  pt: Proptypes.object,
  pricingDataKey: Proptypes.string,
  pageTitle: Proptypes.string,
};

export default PricingTableSection;
