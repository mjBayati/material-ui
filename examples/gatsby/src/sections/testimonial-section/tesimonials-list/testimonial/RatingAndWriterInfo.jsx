import React from 'react';
import PropTypes from 'prop-types';
import TestimonialWriter from "./TestimonialWriter";
import Grid from '@mui/material/Grid';
import Rating from "@mui/material/Rating";

const RatingAndWriterInfo = ({ ratingValue, writerInfo }) => {
    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={'auto'}>
                <TestimonialWriter writerInfo={writerInfo} />
            </Grid>
            <Grid item
                xs={'auto'}
                sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        display: "none"
                    },
                    "& .MuiRating-iconEmpty": {
                        color: "#faaf00",
                    }
                })
                }
            >
                <Rating name='testimonial-rating' value={ratingValue} readOnly />
            </Grid>
        </Grid>
    )
}

RatingAndWriterInfo.propTypes = {
    ratingValue: PropTypes.number.isRequired,
    writerInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatarRelativePath: PropTypes.string.isRequired
    }).isRequired,
}


export default RatingAndWriterInfo;