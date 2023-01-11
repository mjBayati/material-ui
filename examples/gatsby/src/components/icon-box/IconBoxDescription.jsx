import Grid from "@mui/material/Grid";
import React from 'react';
import PropTypes from "prop-types";

const IconBoxDescription = ({ description }) => {
    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                {description}
            </Grid>
        </Grid>
    );
}

IconBoxDescription.prototype = {
    description: PropTypes.element.isRequired,
}

export default IconBoxDescription