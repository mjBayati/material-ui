import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>{children}</Box>
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const StyledTabsPanelBody = ({ tabValue, children }) => {
  return (
    <Paper
      sx={{
        boxShadow: (theme) => theme.shadows['1'],
      }}
    >
      {React.Children.map(children, (child, index) => (
        <TabPanel value={tabValue} key={index} index={index}>
          {child}
        </TabPanel>
      ))}
    </Paper>
  );
};

StyledTabsPanelBody.propTypes = {
  tabValue: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired,
  ]),
};

export default StyledTabsPanelBody;
