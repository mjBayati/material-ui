import React from 'react';
import Grid from '@mui/material/Grid';
import MapTitleAndContent from './MapTitleAndContent';
import MapBodySection from './map-body-part/MapBodySection';
import PropTypes from 'prop-types';
import NetworkTest from '../../components/network-test/NetworkTest';

const MapSection = ({ pt }) => {
  return (
    <Grid container spacing={6} pt={pt}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <MapTitleAndContent />
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <MapBodySection />
      </Grid>
      <Grid item xs={12} sx={{ display: { sm: 'block', xs: 'none' } }}>
        <NetworkTest />
      </Grid>
    </Grid>
  );
};

MapSection.propTypes = {
  pt: PropTypes.object,
};

export default MapSection;
