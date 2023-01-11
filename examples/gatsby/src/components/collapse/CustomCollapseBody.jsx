import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';

const CustomCollapseBody = ({ expanded, children, sx }) => {
  return (
    <Grid container>
      <Collapse in={expanded} sx={sx}>
        {children}
      </Collapse>
    </Grid>
  );
};

CustomCollapseBody.prototype = {
  children: PropTypes.element.isRequired,
  expanded: PropTypes.bool.isRequired,
  sx: PropTypes.object,
};

export default CustomCollapseBody;
