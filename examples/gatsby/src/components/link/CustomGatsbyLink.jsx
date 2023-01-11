import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import Link from '@mui/material/Link';
import routeUtil from '../../util/route.util';

const CustomGatsbyLink = ({
  to,
  text,
  children,
  variant,
  sx,
  onClick,
  id,
  rel,
}) => {
  const normalizedLink = routeUtil.normalizeInternalLink(to);

  return (
    <GatsbyLink
      to={normalizedLink}
      style={{ textDecoration: 'none' }}
      rel={rel}
    >
      <Link
        id={id ? id : text}
        component={'span'}
        underline="none"
        variant={variant}
        sx={sx}
        onClick={onClick}
      >
        {text || children}
      </Link>
    </GatsbyLink>
  );
};

CustomGatsbyLink.prototype = {
  children: PropTypes.element,
  id: PropTypes.string,
  rel: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  sx: PropTypes.object,
  onClick: PropTypes.func,
};

export default CustomGatsbyLink;
