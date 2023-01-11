import React from 'react';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import * as styles from 'components/carousel/CustomCarousel.module.css';

const NextArrowCarousel = ({ id, className, onClick, sx, icon }) => {
  return (
    <IconButton
      component={'a'}
      id={id}
      className={` ${styles.nextArrow} prevNextBlogAndKBSection ${className}`}
      onClick={onClick}
      sx={Object.assign(
        {},
        (theme) => ({
          boxShadow: 'none',
          backgroundColor: theme.palette.info.main,
          color: theme.palette.primary.main,
          '&:hover': {
            color: theme.palette.background.default,
          },
        }),
        sx,
      )}
    >
      {icon}
    </IconButton>
  );
};

NextArrowCarousel.prototype = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  sx: PropTypes.object,
};

export default NextArrowCarousel;
