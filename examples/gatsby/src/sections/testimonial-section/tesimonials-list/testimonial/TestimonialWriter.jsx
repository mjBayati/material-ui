import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as styles from './TestimonialWriter.module.css';
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const TestimonialWriter = ({ writerInfo }) => {
  const tetimonialImages = useStaticQuery(graphql`
        query GetBlogTestimonialImages {
              allFile(
                filter: {relativePath: {regex: "/testimonial-png/"}}
              ) {
                nodes {
                  relativePath,
                  childImageSharp {
                        gatsbyImageData
                  }
                }
              }
            }
    `)
  const testimonialImage = tetimonialImages?.allFile?.nodes?.find(node => node.relativePath === writerInfo.avatarRelativePath);
  return (
    <Grid container alignItems="center" justifyContent="flex-start" spacing={1} flexWrap='nowrap'>
      <Grid item xs={'auto'}>
        <GatsbyImage image={testimonialImage?.childImageSharp?.gatsbyImageData} className={styles.testimonialWriterAvatar} alt={writerInfo.name} />
      </Grid>
      <Grid item xs={'auto'}>
        <Typography
          variant="subtitle1"
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
        >
          {writerInfo.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

TestimonialWriter.propTypes = {
  writerInfo: PropTypes.shape({
    avatarRelativePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
};

export default TestimonialWriter;
