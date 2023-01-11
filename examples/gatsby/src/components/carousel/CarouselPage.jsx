import Grid from "@mui/material/Grid";
import React from 'react';
import PropTypes from 'prop-types';

const CarouselPage = ({ items, pageItemProps, pageProps, pageWrapperProps }) => {
    return (
        <Grid container justifyContent="center" minHeight={1} height={1} width={1} sx={pageWrapperProps}>
            <Grid item xs={12}>
                <Grid container {...pageProps}>
                    {items.map((item, index) => (
                        <Grid item {...pageItemProps} key={index}>
                            {item}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

CarouselPage.prototype = {
    items: PropTypes.element.isRequired,
    pageItemProps: PropTypes.object,
    pageProps: PropTypes.object,
    pageWrapperProps: PropTypes.object
}

export default CarouselPage;





