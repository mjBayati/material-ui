import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import CustomLink from '../link/CustomLink';

const getVariantByTextSize = (textSize) => {
  if (
    !textSize ||
    !['buttonLarge', 'buttonMedium', 'buttonSmall', 'subtitle1'].includes(
      textSize,
    )
  ) {
    return 'buttonLarge';
  }
  return textSize;
};

const BareButtonLink = ({
  id,
  variant,
  contentText,
  endIcon,
  fullWidth,
  color,
  sx,
  textSize,
  textColor,
  onClick,
  className,
  disabled,
  component,
  disableElevation,
}) => {
  return (
    <Button
      component={component || 'button'}
      id={id ? id : contentText}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      endIcon={endIcon}
      onClick={onClick}
      className={className}
      disabled={disabled}
      disableElevation={disableElevation}
      sx={Object.assign(
        {},
        {
          paddingX: 2.5,
          paddingY: 1,
        },
        sx,
      )}
    >
      <Typography
        variant={getVariantByTextSize(textSize)}
        sx={{
          color: textColor,
        }}
      >
        {contentText}
      </Typography>
    </Button>
  );
};

const CustomButton = ({
  id,
  variant,
  contentText,
  endIcon,
  fullWidth,
  color,
  sx,
  textSize,
  textColor,
  onClick,
  navigationObject,
  className,
  disabled,
  component,
  disableElevation,
}) => {
  if (!!navigationObject) {
    return (
      <CustomLink navigationObject={navigationObject} id={id}>
        <BareButtonLink
          variant={variant}
          contentText={contentText}
          endIcon={endIcon}
          fullWidth={fullWidth}
          color={color}
          sx={sx}
          textSize={textSize}
          textColor={textColor}
          className={className}
          disabled={disabled}
          disableElevation={disableElevation}
        />
      </CustomLink>
    );
  }
  return (
    <BareButtonLink
      id={id}
      variant={variant}
      contentText={contentText}
      endIcon={endIcon}
      fullWidth={fullWidth}
      color={color}
      sx={sx}
      textSize={textSize}
      textColor={textColor}
      onClick={onClick}
      className={className}
      disabled={disabled}
      component={component}
      disableElevation={disableElevation}
    />
  );
};

CustomButton.prototype = {
  variant: PropTypes.string.isRequired,
  contentText: PropTypes.string,
  endIcon: PropTypes.element,
  fullWidth: PropTypes.bool,
  color: PropTypes.string.isRequired,
  sx: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.object,
  textColor: PropTypes.string,
  id: PropTypes.string,
  navigationObject: PropTypes.object,
  disabled: PropTypes.bool,
  component: PropTypes.string,
  disableElevation: PropTypes.bool,
};

export default CustomButton;
