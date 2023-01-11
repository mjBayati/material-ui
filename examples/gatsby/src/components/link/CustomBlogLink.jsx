import Link from '@mui/material/Link';
import routeUtil from '../../util/route.util';
import React from 'react';
import PropTypes from 'prop-types';

const CustomBlogLink = (props) => {
  return (
    <Link
      rel={!routeUtil.isInternal(props.href) && 'nofollow noopener'}
      target={!props.href?.startsWith('#') && '_blank'}
      underline="none"
      href={routeUtil.normalizeWithPostfix(props.href, '/')}
      variant="body1"
      sx={{ color: (theme) => theme.palette.link.main }}
    >
      {props.children}
    </Link>
  );
};

CustomBlogLink.prototype = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

export default CustomBlogLink;
