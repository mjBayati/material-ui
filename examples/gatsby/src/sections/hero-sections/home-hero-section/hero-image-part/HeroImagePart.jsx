import Grid from '@mui/material/Grid';
import React from 'react';
// import PerformanceFeature from '../../../../components/performance-features/PerformanceFeatures';
import { StaticImage } from 'gatsby-plugin-image';
// import HomeHero from '../../../../images/home-heroe-section/Home_hero.inline.svg'

const HeroImage = () => {
  return (
    // <HomeHero />
    <StaticImage
      src="../../../../images/home-heroe-section/Home_hero-min.webp"
      loading="eager"
      alt="HeroImage"
    />
  );
};

const HeroImagePart = () => {
  return (
    <Grid container height={1} pt={{ lg: 10, md: 10 }} spacing={{ xs: 1 }}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <HeroImage />
      </Grid>
      {/* <Grid item xs={12} mb={{ lg: -12, sm: -10, xs: 0 }}> */}
      {/* <PerformanceFeature /> */}
      {/* </Grid> */}
    </Grid>
  );
};

export default HeroImagePart;
