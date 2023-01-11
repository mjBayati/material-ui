import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from 'react';
import PropType from 'prop-types';

const PerformanceFeatureElement = ({title, description}) => {
    return (
        <Grid container m={1}>
            <Grid item xs={12}>
                <Typography variant="subtitle2">
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="caption" color="primary">
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}

PerformanceFeatureElement.prototype = {
    title: PropType.string.isRequired,
    description: PropType.string.isRequired
}

export default PerformanceFeatureElement;