import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MostPopularServicesTabsAndImagePart from './most-popular-services-tabs-and-image-part/MostPopularServicesTabsAndImagePart';
import PropTypes from 'prop-types';

const MostPopularServicesSection = ({ pt, title, data }) => {
  return (
    <Grid container pt={pt}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={(theme) => ({
            color: (theme) => theme.palette.text.primary,
            [theme.breakpoints.down('sm')]: {
              textAlign: 'center',
            },
          })}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={4}>
        <MostPopularServicesTabsAndImagePart data={data} />
      </Grid>
    </Grid>
  );
};

MostPopularServicesSection.propTypes = {
  pt: PropTypes.object,
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.arrayOf({
      serviceName: PropTypes.string,
      serviceIcon: PropTypes.string,
      serverActiveIcon: PropTypes.string,
      serviceDescriptionContent: {
        content: PropTypes.string,
        description: PropTypes.string
      },
    }),
  }))
};

export default MostPopularServicesSection;
