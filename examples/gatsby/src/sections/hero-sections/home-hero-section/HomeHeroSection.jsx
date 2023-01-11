import React from 'react';
import Grid from '@mui/material/Grid';
import HeroIntroduction from "./hero-introduction/HeroIntroduction";
import HeroImagePart from "./hero-image-part/HeroImagePart";
import PropTypes from 'prop-types';

const HomeHeroSection = ({mt}) => {
    return (
        <Grid container alignItems="center" justifyContent="center"
              mt={mt}
              spacing={{lg: 4, md: 4, xs: 3, sm: 5}}
        >
            <Grid item lg={6} md={5} sm={12} xs={12}>
                <HeroIntroduction />
            </Grid>
            <Grid item lg={6} md={7} sm={12} xs={12}>
                <HeroImagePart/>
            </Grid>
        </Grid>
    )
}

HomeHeroSection.propTypes = {
    mt: PropTypes.object
}

export default HomeHeroSection;
