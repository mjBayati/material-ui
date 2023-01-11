import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from "prop-types";
import WhyChooseIconCard from './WhyChooseIconCard';

const WhyChooseIconBoxLargeMode = ({ data }) => {
    return (
        <Grid container spacing={3}>
            {data.map((item, index) => (
                <Grid item lg={4} sm={6} xs={12} key={index}>
                    <WhyChooseIconCard
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

WhyChooseIconBoxLargeMode.prototype = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
        }),
    ),
}


export default WhyChooseIconBoxLargeMode;
