import React from 'react';
import Grid from '@mui/material/Grid';
import MostPopularServicesImage from './MostPopularServicesImage';
import TabAccordion from '../../../components/tab-accordion/TabAccordion';
import TabAccordionGroupedContentIcon from '../../../components/tab-accordion/TabAccorionGroupedContentIcon';
import MostPopularServicesDescription from './MostPopularServicesDescription';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const MostPopularServicesTabsAndImagePart = ({ data }) => {
  const theme = useTheme();
  const itemsDescriptionList = data.map((item) => ({
    title: item.serviceDescriptionContent.title,
    body: item.serviceDescriptionContent.description,
    action: item.serviceDescriptionContent.action,
    id: item.serviceName,
  }));

  const groupedContent = data.map((item) => {
    const Description = itemsDescriptionList.find(
      (content) => content.id === item.serviceName,
    );

    return {
      id: item.serviceName,
      icon: <TabAccordionGroupedContentIcon iconPath={item.serviceIcon} serviceName={item.serviceName} />,
      title: item.serviceName,
      descriptionNode: (
        <MostPopularServicesDescription
          description={Description}
          key={item.serviceName}
        />
      ),
    };
  });

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          flexWrap: 'wrap-reverse',
        },
      })}
    >
      <Grid item lg={8} md={12}>
        <TabAccordion
          groupedContent={groupedContent}
          breakpoint={theme.breakpoints.values.sm}
          type="color"
          iconSize={{ width: '41px', height: '41px' }}
        />
      </Grid>
      <Grid item lg={4} md={9} sm={10} xs={12}>
        <MostPopularServicesImage />
      </Grid>
    </Grid>
  );
};

MostPopularServicesTabsAndImagePart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.shape({
      serviceName: PropTypes.string,
      serviceIcon: PropTypes.string,
      serviceDescriptionContent: PropTypes.shape({
        content: PropTypes.string,
        description: PropTypes.string,
    }),
    })),
  })),
};

export default MostPopularServicesTabsAndImagePart;
