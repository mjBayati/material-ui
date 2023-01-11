import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import globalVariableRepository from '../../repository/global-variable.repository';

const MapTitleAndContent = () => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      alignItems="center"
    >
      <Grid item lg={12} mb={3}>
        <Typography variant="h2">
          More Than {globalVariableRepository.NUMBER_OF_LOCATIONS} Locations,
          All Over The World
        </Typography>
      </Grid>
      <Grid item lg={12} sm={10.5} xs={10.5}>
        <Typography
          variant="body1"
          sx={{
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          Choose Whatever Location Best Suits Your Business: Get a Cloud VPS
          Closer to Your Users, Remove Latency
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MapTitleAndContent;
