import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import CustomCollapseBody from '../../../../components/collapse/CustomCollapseBody';
import WhyChooseIconCard from '../WhyChooseIconCard';

const IconBoxLoadMoreBody = ({ data, expanded, collapseAfterIndex }) => {
    return (
        <CustomCollapseBody expanded={expanded}>
            <Grid container spacing={3}>
                {data.slice(collapseAfterIndex).map((item, index) => (
                    <Grid item lg={4} sm={6} xs={12} key={index}>
                        <WhyChooseIconCard
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </CustomCollapseBody>
    );
};

IconBoxLoadMoreBody.prototype = {
    expanded: PropTypes.string.isRequired,
    collapseAfterIndex: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
        }),
    ),
};

export default IconBoxLoadMoreBody;
