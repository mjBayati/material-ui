import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropType from 'prop-types';
import CustomButton from '../../../components/button/CustomButton';
import { useTheme } from '@mui/material/styles';
import CustomLink from '../../../components/link/CustomLink';

const TabAccordionGroupedDescriptionContent = ({ title, body }) => {
  return (
    <Grid
      container
      spacing={2}
      flexDirection="column"
      alignItems="start"
      justifyContent="start"
    >
      {title && (
        <Grid item>
          <Typography
            variant="h5"
            sx={{
              color: (theme) => theme.palette.text.primary,
            }}
          >
            {title}
          </Typography>
        </Grid>
      )}

      {body && (
        <Grid item>
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {body}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

TabAccordionGroupedDescriptionContent.prototype = {
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
};

const MostPopularServicesDescription = ({ description }) => {
  const theme = useTheme();
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="start"
      justifyContent="spaceBetween"
      spacing={2}
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          gap: 4,
        },
      })}
    >
      <Grid item>
        <TabAccordionGroupedDescriptionContent
          title={description.title}
          body={description.body}
        />
      </Grid>

      {description.action && (
        <Grid item>
          <CustomLink
            className="mostPopularServicesAction"
            navigationObject={description.action}
          >
            <CustomButton
              variant="contained"
              color="info"
              contentText={description.action.content}
              textColor={theme.palette.primary.main}
              sx={{
                boxShadow: theme.shadows['0'],
              }}
            />
          </CustomLink>
        </Grid>
      )}
    </Grid>
  );
};

MostPopularServicesDescription.prototype = {
  description: PropType.shape({
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    action: PropType.shape({
      content: PropType.string.isRequired,
      link: PropType.string.isRequired,
    }),
  }),
};

export default MostPopularServicesDescription;
