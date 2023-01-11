import Grid from "@mui/material/Grid";
import React from 'react';
import PropTypes from "prop-types";

const IconBoxTitle = ({ title }) => {
    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{textAlign: "start"}}>
                {title}
            </Grid>
        </Grid>
    );
}

IconBoxTitle.prototype = {
    title: PropTypes.element.isRequired,
}

export default IconBoxTitle