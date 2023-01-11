import React from 'react';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import StyledSingleTab from './StyledSingleTab';

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const ActiveIconBasedStyledTabs = ({ handleChange, tabs, selectedTab, iconSize }) => {
  const [activeIconState, setActiveIconState] = React.useState(selectedTab);
  const handleIcon = (value, newValue) => {
    setActiveIconState(newValue);
    handleChange(value, newValue);
  };
  return (
    <Tabs
      value={selectedTab}
      onChange={handleIcon}
      variant="fullWidth"
      aria-label="basic tabs"
      key={activeIconState}
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
      {tabs.map((tab, index) => (
        <StyledSingleTab
          component={'a'}
          className={'mostPopularServicesTab'}
          label={tab.title}
          key={tab.id}
          icon={activeIconState === index ? tab.activeIcon : tab.icon}
          iconsize={iconSize}
          {...a11yProps(tab.id)}
          sx={(theme) => ({
            typography: theme.typography.body1,
            color: theme.palette.text.secondary,
          })}
        />
      ))}
    </Tabs>
  );
};

ActiveIconBasedStyledTabs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.element,
    }),
  ),
  selectedTab: PropTypes.number.isRequired,
  iconSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
};

export default ActiveIconBasedStyledTabs;
