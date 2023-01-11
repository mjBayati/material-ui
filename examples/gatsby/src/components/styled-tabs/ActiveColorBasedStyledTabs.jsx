import Tabs from '@mui/material/Tabs';
import React from 'react';
import PropTypes from 'prop-types';
import StyledSingleTab from './StyledSingleTab';

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const ActiveColorBasedStyledTabs = ({
  handleChange,
  tabs,
  selectedTab,
  styleonhoverforstarticon,
  summarystyle,
  iconSize
}) => {
  return (
    <Tabs
      value={selectedTab}
      onChange={handleChange}
      variant="fullWidth"
      aria-label="basic tabs"
      TabIndicatorProps={{ sx: { display: 'none' } }}
      sx={{
        '& .MuiTabs-scroller': {
          '& .MuiTabs-flexContainer': {
            gap: 2,
            marginBottom: 1.2,
            paddingX: 0.5,
          },
        },
      }}
    >
      {tabs.map((tab) => (
        <StyledSingleTab
          component={'a'}
          className={'mostPopularServicesTab'}
          styleonhoverforstarticon={styleonhoverforstarticon}
          summarystyle={summarystyle}
          label={tab.title}
          key={tab.id}
          icon={tab.icon}
          iconsize={iconSize}
          {...a11yProps(tab.id)}
          sx={(theme) => ({
            typography: theme.typography.h6,
            color: theme.palette.text.secondary,
          })}
        />
      ))}
    </Tabs>
  );
};

ActiveColorBasedStyledTabs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.element,
      descriptionNode: PropTypes.element,
    }),
  ).isRequired,
  selectedTab: PropTypes.number.isRequired,
  summarystyle: PropTypes.objectOf({
    flexDirection: PropTypes.string,
    svg: PropTypes.objectOf({
      marginRight: PropTypes.string,
    }),
  }),
  iconSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
};

export default ActiveColorBasedStyledTabs;
