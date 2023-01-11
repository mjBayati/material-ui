import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import PerformanceFeatureElement from './PerformanceFeatureElement';
import features from '../../sections/hero-sections/home-hero-section/data/performanceFeatures.data';
import React from 'react';

const PerformanceFeaturesListInLargeMode = () => {
  return (
    <Box position="relative" top={{ lg: -130, md: -130, sm: -130 }}>
      <Card
        sx={{
          boxShadow: (theme) => theme.shadows['2'],
        }}
      >
        <Grid container m={1}>
          {features.map((item, index) => (
            <Grid item lg={item.size} md={item.size} sm={item.size} key={index}>
              <PerformanceFeatureElement
                title={item.subtitle}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};

export default PerformanceFeaturesListInLargeMode;
