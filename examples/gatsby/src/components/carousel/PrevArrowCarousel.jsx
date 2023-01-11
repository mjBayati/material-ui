import React from 'react';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import * as styles from 'components/carousel/CustomCarousel.module.css';

const PrevArrowCarousel = ({ id, className, onClick, sx, icon }) => {
  return (
    <IconButton
      component={'a'}
      id={id}
      className={` ${styles.prevArrow} prevNextBlogAndKBSection ${className}`}
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
          '&:before': {
            display: 'none',
          },
          '&.slick-disabled': {
            backgroundColor: theme.palette.primary.contrastText + '!important',
            color: theme.palette.primary.main + '!important',
            pointerEvents: 'none',
          },
        }),
        sx,
      )}
    >
      {icon}
    </IconButton>
  );
};
PrevArrowCarousel.prototype = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  sx: PropTypes.object,
};
export default PrevArrowCarousel;
