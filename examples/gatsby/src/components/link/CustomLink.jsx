import React from 'react';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import routeUtil from '../../util/route.util';
import InternalLink from './InternalLink';
import IdBaseInternalLink from './IdBaseInternalLink';

const CustomLink = ({
  navigationObject,
  children,
  id,
  style,
  className,
  idBaseClickEvent,
  targetNotBlank,
}) => {
  if (navigationObject.link) {
    return (
      <InternalLink
        link={navigationObject.link}
        id={id}
        className={className}
        style={style}
      >
        {children}
      </InternalLink>
    );
  } else if (navigationObject.remoteLink) {
    return (
      <Link
        target={targetNotBlank ? '_self' : '_blank'}
        id={id}
        underline="none"
        href={routeUtil.normalizeWithPostfix(navigationObject.remoteLink, '/')}
        style={{ textDecoration: 'none', color: 'inherit', ...style }}
        className={className}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <IdBaseInternalLink
        id={id}
        className={className}
        navigationObject={navigationObject}
        style={style}
        idBaseClickEvent={idBaseClickEvent}
      >
        {children}
      </IdBaseInternalLink>
    );
  }
};

CustomLink.propTypes = {
  navigationObject: PropTypes.shape({
      sectionId: PropTypes.string,
      remoteLink: PropTypes.string,
      link: PropTypes.string,
      location: PropTypes.string,
      fallback: PropTypes.string,
      validPages: PropTypes.shape({
        templateType: PropTypes.arrayOf(PropTypes.string),
        pages: PropTypes.arrayOf(PropTypes.string),
      }),
  }).isRequired,
  children: PropTypes.element.isRequired,
  id: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  idBaseClickEvent: PropTypes.func,
  targetNotBlank: PropTypes.bool,
};

export default CustomLink;
