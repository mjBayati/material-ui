import React from 'react';
import TestimonialTitleAndContentWrapper from './TestimonialTitleAndContentWrapper';
import TestimonialBackLayout from './TestimonialBackLayout';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

const TestimonialSection = ({ pt, testimonialIds }) => {
  return (
        <Grid container pt={pt}>
          <Grid item lg={11} md={11} sm={12} xs={12}>
            <TestimonialBackLayout>
              <TestimonialTitleAndContentWrapper
                testimonialIds={testimonialIds}
              />
            </TestimonialBackLayout>
          </Grid>
        </Grid>
  );
};

TestimonialSection.propTypes = {
  pt: PropTypes.object,
  testimonialIds: PropTypes.arrayOf(PropTypes.number),
};

export default TestimonialSection;
