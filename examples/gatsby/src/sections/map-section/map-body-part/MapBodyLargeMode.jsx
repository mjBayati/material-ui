import React from 'react';
import Grid from '@mui/material/Grid';
import Map from '../../../images/map-section/MapCheck.inline.svg'
import * as styles from './MapStyles.module.css';

const MapBodyLargeMode = () => {
    return (
        <Grid container>
            <Grid item lg={12} md={12} className={styles.map}>
                <Map/>
            </Grid>
        </Grid>
    );
};

export default MapBodyLargeMode;
