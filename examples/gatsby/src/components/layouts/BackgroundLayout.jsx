import Box from '@mui/material/Box';
import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImageLayout = ({
  children,
  backgroundImage,
  backgroundHeight,
  backgroundSize,
  backgroundPositionX,
  sxStyles,
}) => {
  const customStyles = (theme) => ({
    ...sxStyles,
    maxHeight: backgroundHeight,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: backgroundPositionX,
    [theme.breakpoints.up('xl')]: {
      backgroundImage: `url(${backgroundImage?.xl})`,
      backgroundSize: backgroundSize.xl,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      backgroundImage: `url(${backgroundImage?.lg})`,
      backgroundSize: backgroundSize.lg,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      backgroundImage: `url(${backgroundImage?.md})`,
      backgroundSize: backgroundSize.md,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundImage: `url(${backgroundImage?.sm})`,
      backgroundSize: backgroundSize.sm,
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      backgroundImage: `url(${backgroundImage?.xs})`,
      backgroundSize: backgroundSize.xs,
    },
  });

  return (
    <Box id="bglayout" sx={customStyles}>
      {children}
    </Box>
  );
};

const BackgroundLayout = ({
  children,
  backgroundImage,
  backgroundHeight,
  backgroundSize,
  backgroundTransition,
  backgroundPositionX,
  backgroundColor,
  sxStyles,
}) => {
  let customStyles;
  if (backgroundImage) {
    return (
      <BackgroundImageLayout
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
        backgroundSize={backgroundSize}
        backgroundPositionX={backgroundPositionX}
        sxStyles={sxStyles}
      >
        {children}
      </BackgroundImageLayout>
    );
  } else if (backgroundTransition) {
    customStyles = { ...sxStyles, background: backgroundTransition };
  } else if (backgroundColor) {
    customStyles = { ...sxStyles, backgroundColor: backgroundColor };
  } else {
    customStyles = (theme) => ({
      ...sxStyles,
      backgroundColor: theme.palette.primary.contrastText,
    });
  }
  return (
    <Box id="bglayout" sx={customStyles}>
      {children}
    </Box>
  );
};

BackgroundLayout.propTypes = {
  children: PropTypes.element.isRequired,
  backgroundPositionX: PropTypes.string,
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
  backgroundTransition: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default BackgroundLayout;
