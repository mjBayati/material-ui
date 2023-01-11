import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './OsImage.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const OsImage = ({ path, alt, isSelected }) => {
  const osImages = useStaticQuery(graphql`
        query GetOsImage {
              allFile(
                filter: {relativePath: {regex: "/^pricing-table-section/[a-zA-Z\\d]+\\.png$/gm"}}
              ) {
                nodes {
                      relativePath,
                      childImageSharp{
                                gatsbyImageData
                      }
                }
              }
            }
    `);

  let pathToSearch = path;
  if (isSelected) {
    pathToSearch =
      pathToSearch.split('.')[0] + 'MostPopular.' + pathToSearch.split('.')[1];
  }
  const osImageNode = osImages?.allFile?.nodes?.find(
    (node) => node.relativePath === pathToSearch,
  );
  return (
    <GatsbyImage
      image={osImageNode?.childImageSharp?.gatsbyImageData}
      alt={alt}
      className={styles.osImage}
    />
  );
};

OsImage.propTypes = {
  alt: PropTypes.string,
  path: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

export default OsImage;
