import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TestimonialListWrapper from './tesimonials-list/TestimonialListWrapper';
import React from 'react';
import TestimonialData from "./data/testimonial.data";
import Box from '@mui/material/Box';
import PropTypes from "prop-types";

const TestimonialTitleAndContentWrapper = ({testimonialIds}) => {
  const data = TestimonialData.getTestimonialByListOfId(testimonialIds);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={{ lg: 2, md: 1, sm: 7, xs: 0 }}
    >
      <Grid
        item
        lg={4}
        md={4}
        sm={12}
        xs={12}
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            textAlign: 'center',
          },
        })}
      >
        <Typography
          variant="h2"
          sx={{ color: (theme) => theme.palette.background.default }}
        >
          What Our Users Have To Say
        </Typography>
      </Grid>
      <Grid
        item
        lg={8}
        md={8}
        sm={12}
        xs={12}
        position="relative"
        sx={(theme) => ({
          [theme.breakpoints.up('lg')]: {
            right: -105,
          },
          [theme.breakpoints.up('md')]: {
            right: -90,
          },
          [theme.breakpoints.down('sm')]: {
            bottom: -50,
          },
        })}
      >
        <Box position="relative">
          <TestimonialListWrapper data={data} />
        </Box>
      </Grid>
    </Grid>
  );
};

TestimonialTitleAndContentWrapper.propTypes = {
    testimonialIds: PropTypes.arrayOf(PropTypes.number)
}

export default TestimonialTitleAndContentWrapper;
