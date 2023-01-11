import React from 'react';
import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import { Link as GatsbyLink } from 'gatsby';
import routeUtil from '../../../util/route.util';

const MapBodySmallModeLink = ({ data }) => {
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item lineHeight={0}>
        <CircleIcon
          sx={{
            color: (theme) => theme.palette.common.lightBlue,
            fontSize: '0.75rem',
          }}
        />
      </Grid>
      <Grid item>
        <GatsbyLink
          to={routeUtil.normalizeWithPostfix(data.path, '/')}
          style={{ textDecoration: 'none' }}
        >
          <Link
            component="span"
            variant="subtitle2"
            underline="none"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            {data.LocationName}
          </Link>
        </GatsbyLink>
      </Grid>
    </Grid>
  );
};

MapBodySmallModeLink.prototype = {
  data: PropTypes.shape({
    LocationName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};

export default MapBodySmallModeLink;
