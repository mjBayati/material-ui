import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import Box from '@mui/material/Box';

const MostPopularServicesImage = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="flex-start">
            <StaticImage alt={'StaticImage'} loading="eager" src={'../data/mostPopularServices.webp'} />
        </Box>
    );
}

export default MostPopularServicesImage;