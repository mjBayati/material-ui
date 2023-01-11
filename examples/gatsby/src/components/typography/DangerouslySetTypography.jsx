import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const DangerouslySetTypography = ({
  sx,
  children,
  color,
  variant,
  component,
  mt,
  mb,
}) => {
  return (
    <Typography
      color={color}
      variant={variant}
      component={component}
      mt={mt}
      mb={mb}
      dangerouslySetInnerHTML={{ __html: children }}
      sx={{
        ...sx,
        '& a': {
          textDecoration: 'none',
          color: (theme) => theme.palette.link.main,
        },
        '& a:visited': {
          textDecoration: 'none',
          color: (theme) => theme.palette.link.main,
        },
      }}
    />
  );
};

DangerouslySetTypography.prototype = {
  sx: PropTypes.object,
  children: PropTypes.array,
  color: PropTypes.string,
  variant: PropTypes.string,
  component: PropTypes.string,
  mt: PropTypes.number || PropTypes.objectOf(PropTypes.number),
  mb: PropTypes.number || PropTypes.objectOf(PropTypes.number),
};

export default DangerouslySetTypography;
