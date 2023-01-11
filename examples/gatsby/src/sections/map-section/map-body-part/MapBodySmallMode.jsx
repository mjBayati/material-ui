import React from 'react';
import Grid from '@mui/material/Grid';
import LocationData from "../data/mapData.data"
import MapBodySmallModeLink from './MapBodySmallModeLink';

const MapBodySmallMode = () => {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={11} sm={10}>
                <Grid container
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                >
                    {LocationData.map((item, index) => {
                        return (
                            <Grid item sm={4} xs={6} key={index}>
                                <MapBodySmallModeLink data={item} />
                            </Grid>)
                    })}
                </Grid >
            </Grid>
        </Grid>

    );
};

export default MapBodySmallMode;
