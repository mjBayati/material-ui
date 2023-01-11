import React from 'react';
import StyledTabsContainer from '../styled-tabs/StyledTabsContainer';
import ActiveIconBasedStyledTabs from '../styled-tabs/ActiveIconBasedStyledTabs';
import ActiveColorBasedStyledTabs from '../styled-tabs/ActiveColorBasedStyledTabs';
import StyledTabsPanelBody from '../styled-tabs/StyledTabsPanelBody';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import tabModeConfing from '../../config/tabMode.config';
import StrongTextBaseStyledTabs from '../styled-tabs/StrongTextBaseStyledTabs';

const TabAccordionLargeMode = ({ tabs, summarystyle, type, iconSize }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const switchComponent = () => {
    if (type === tabModeConfing.ColorMode) {
      return (
        <ActiveColorBasedStyledTabs
          handleChange={handleChange}
          tabs={tabs}
          selectedTab={selectedTab}
          styleonhoverforstarticon={{
            fill: 'black',
            filter: theme.palette.common.svgFilter,
          }}
          summarystyle={summarystyle}
          iconSize={iconSize}
        />
      );
    } else if (type === tabModeConfing.StrongTextModel) {
      return (
        <StrongTextBaseStyledTabs
          handleChange={handleChange}
          tabs={tabs}
          selectedTab={selectedTab}
        />
      );
    } else {
      return (
        <ActiveIconBasedStyledTabs
          handleChange={handleChange}
          tabs={tabs}
          selectedTab={selectedTab}
          summarystyle={summarystyle}
          iconSize={iconSize}
        />
      );
    }
  };

  return (
    <StyledTabsContainer>
      {switchComponent()}
      <StyledTabsPanelBody tabValue={selectedTab}>
        {tabs.map((tab) => tab.descriptionNode)}
      </StyledTabsPanelBody>
    </StyledTabsContainer>
  );
};

TabAccordionLargeMode.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.element,
      descriptionNode: PropTypes.element,
    }),
  ).isRequired,
  summarystyle: PropTypes.shape({
    flexDirection: PropTypes.string,
    svg: PropTypes.shape({
      marginRight: PropTypes.string,
    }),
  }),
  type: PropTypes.string,
  iconSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
};

export default TabAccordionLargeMode;
