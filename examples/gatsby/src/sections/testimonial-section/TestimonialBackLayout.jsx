import background from '../../images/testimonial-section/Testimonial-xl-min.jpg';
import backgroundSm from '../../images/testimonial-section/Testimonial-sm-min.jpg';
import Grid from '@mui/material/Grid';
import React from 'react';
import PropTypes from 'prop-types';

const TestimonialBackLayout = ({ children }) => {
  return (
    <Grid
      container
      position="relative"
      alignItems="center"
      style={{
        backgroundRepeat: 'no-repeat',
      }}
      sx={(theme) => ({
        backgroundSize: 'cover',
        backgroundImage: {
          md: `url(${background})`,
          xs: `url(${backgroundSm})`,
        },
        borderRadius: 2,
        [theme.breakpoints.up('lg')]: {
          padding: 4,
          paddingTop: 7,
          minHeight: '600',
          justifyContent: 'flex-end',
        },
        [theme.breakpoints.between('md', 'lg')]: {
          padding: 4,
          paddingTop: 6,
          paddingRight: 0,
        },
        [theme.breakpoints.between('sm', 'md')]: {
          padding: 3,
        },
        [theme.breakpoints.down('sm')]: {
          paddingTop: 3,
          paddingRight: 1,
          paddingLeft: 1,
          maxHeight: '300px',
          marginBottom: 30,
        },
      })}
    >
      <Grid item xs={12} lg={11.6} md={11.6}>
        {children}
      </Grid>
    </Grid>
  );
};

TestimonialBackLayout.propTypes = {
  children: PropTypes.element,
};

export default TestimonialBackLayout;
