import Link from '@mui/material/Link';
import React, { useContext } from 'react';
import routeUtil from '../../util/route.util';
import PropTypes from 'prop-types';
import FrontMatterContext from '../../context/FrontMatter.context';

const InternalLink = ({ link, className, id, style, children }) => {
  const normalizedLink = routeUtil.normalizeInternalLink(link);
  const templateType = useContext(FrontMatterContext).templateType;
  return (
    <Link
      target={routeUtil.isArticle(templateType) ? '_blank' : '_self'}
      id={id}
      href={normalizedLink}
      style={{ textDecoration: 'none', color: 'inherit', ...style }}
      className={className}
    >
      {children}
    </Link>
  );
};

InternalLink.propTypes = {
  link: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.element,
};

export default InternalLink;
