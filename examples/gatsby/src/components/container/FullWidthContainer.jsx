import React from 'react';
import CustomizedContainer from './CustomizedContainer';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import BackgroundLayout from "../layouts/BackgroundLayout";

const FullWidthContainer = ({
  children,
  pt,
  backgroundImage,
  backgroundHeight,
  mb,
  backgroundSize,
  backgroundTransition,
  backgroundPositionX,
  backgroundColor
}) => {
  return (
    <Box
      pt={pt}
      mb={mb}
      sx={{
        width: '100vw',
        position: 'relative',
        marginLeft: '-50vw',
        left: '50%',
      }}
    >
      <BackgroundLayout
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
        backgroundSize={backgroundSize}
        backgroundTransition={backgroundTransition}
        backgroundPositionX={backgroundPositionX}
        backgroundColor={backgroundColor}
      >
        <CustomizedContainer>{children}</CustomizedContainer>
      </BackgroundLayout>
    </Box>
  );
};

FullWidthContainer.propTypes = {
  pt: PropTypes.object,
  children: PropTypes.element,
  backgroundImage: PropTypes.shape({
    xl: PropTypes.string,
    lg: PropTypes.string,
    md: PropTypes.string,
    sm: PropTypes.string,
    xs: PropTypes.string,
  }),
  backgroundHeight: PropTypes.object,
  backgroundSize: PropTypes.shape({
    xl: PropTypes.string,
    lg: PropTypes.string,
    md: PropTypes.string,
    sm: PropTypes.string,
    xs: PropTypes.string,
  }),
  backgroundPositionX: PropTypes.string,
  mb: PropTypes.object,
  backgroundTransition: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default FullWidthContainer;
