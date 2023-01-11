import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from "prop-types";
import IconBoxLoadMore from './icon-box-load-more/IconBoxLoadMore';

const WhyChooseIconBoxSmallMode = ({ data }) => {
    return (
        <Grid container spacing={3}>
            <Grid item>
                <IconBoxLoadMore data={data} collapseAfterIndex={3} />
            </Grid>
        </Grid>
    )
}

WhyChooseIconBoxSmallMode.prototype = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
        }),
    ),
}


export default WhyChooseIconBoxSmallMode;
