import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import RatingAndWriterInfo from "./RatingAndWriterInfo";
import TestimonialContent from "./TestimonialContent";
import CustomHorizontalDivider from "../../../../components/divider/CustomHorizontalDivider";

const Testimonial = ({ testimonial, writerInfo, rating}) => {
    return (
        <Grid container
              spacing={{lg: 3, md: 2, xs: 1, sm: 1}}
        >
            <Grid item xs={12}>
                <TestimonialContent content={testimonial} />
            </Grid>
            <Grid item xs={12}>
                <CustomHorizontalDivider />
            </Grid>
            <Grid item xs={12}>
                <RatingAndWriterInfo writerInfo={writerInfo} ratingValue={rating}/>
            </Grid>
        </Grid>
    )
}

Testimonial.propTypes = {
    testimonial: PropTypes.string.isRequired,
    writerInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatarRelativePath: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired
}

export default Testimonial;