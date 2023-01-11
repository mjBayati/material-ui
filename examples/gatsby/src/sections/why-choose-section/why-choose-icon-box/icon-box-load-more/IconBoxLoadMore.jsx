import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from "prop-types";
import IconBoxLoadMoreTitle from './IconBoxLoadMoreTitle';
import IconBoxLoadMoreBody from './IconBoxLoadMoreBody';
import WhyChooseIconCard from '../WhyChooseIconCard';

const IconBoxLoadMore = ({ data, collapseAfterIndex }) => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <Grid container spacing={3}>
            {data.slice(0, collapseAfterIndex).map((item, index) => (
                <Grid item lg={4} sm={6} xs={12} key={index}>
                    <WhyChooseIconCard
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                </Grid>
            ))}
            <Grid item >
                <Grid container>
                    <Grid item>
                        <IconBoxLoadMoreBody data={data} expanded={expanded} collapseAfterIndex={collapseAfterIndex} />
                    </Grid>
                    <Grid item mt={2}>
                        <IconBoxLoadMoreTitle expanded={expanded}
                            setExpanded={setExpanded} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

IconBoxLoadMore.prototype = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.array.isRequired,
            description: PropTypes.string.isRequired,
        }),
    ),
    collapseAfterIndex: PropTypes.number.isRequired
}


export default IconBoxLoadMore;
