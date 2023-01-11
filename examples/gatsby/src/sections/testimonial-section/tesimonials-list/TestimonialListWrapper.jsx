import React from 'react';
import Grid from '@mui/material/Grid';
import TestimonialWrapperIcon from './TestimonialWrapperIcon';
import TestimonialCarousel from './TestimonialCarousel';
import PropTypes from 'prop-types';
import Testimonial from './testimonial/Testimonial';
import Card from '@mui/material/Card';

const TestimonialListWrapper = ({ data }) => {
  const pages = data.map((testimonialItem) => (
    <Testimonial
      testimonial={testimonialItem.comment}
      writerInfo={testimonialItem.writerInfo}
      rating={testimonialItem.rating}
      key={testimonialItem.id}
    />
  ));

  return (
    <Card>
      <Grid container p={{ xs: 2.8, lg: 5, md: 5, sm: 4 }}>
        <Grid item xs={12}>
          <TestimonialWrapperIcon />
        </Grid>
        <Grid item xs={12}>
          <TestimonialCarousel pages={pages} />
        </Grid>
      </Grid>
    </Card>
  );
};

TestimonialListWrapper.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      writerInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatarRelativePath: PropTypes.string.isRequired
      }).isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ),
};

export default TestimonialListWrapper;
