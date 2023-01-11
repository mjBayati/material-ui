import React from 'react';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import StyledSingleTab from './StyledSingleTab';
import Typography from '@mui/material/Typography';

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const StrongTextBaseStyledTabs = ({ handleChange, tabs, selectedTab }) => {
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
          label={
            <Typography component={'h3'} variant={'h6'} color="inherit">
              {tab.title}
            </Typography>
          }
          key={tab.id}
          icon={tab.icon}
          not_change_title_color={true}
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

StrongTextBaseStyledTabs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.element,
      descriptionNode: PropTypes.element,
    }),
  ).isRequired,
  selectedTab: PropTypes.number.isRequired,
};

export default StrongTextBaseStyledTabs;
