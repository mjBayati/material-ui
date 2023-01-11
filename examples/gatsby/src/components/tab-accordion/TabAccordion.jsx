import React from 'react';
import Grid from '@mui/material/Grid';
import PolymorphicOnResizeContainer from '../container/PolymorphicOnResizeContainer';
import TabAccordionLargeMode from './TabAccordionLargeMode';
import PropTypes from 'prop-types';
import TabAccordionSmallMode from './TabAccordionSmallMode';

const TabAccordion = ({ groupedContent, summarystyle, breakpoint, type, iconSize }) => {
  return (
    <Grid container>
      <Grid item>
        <PolymorphicOnResizeContainer
          breakpoint={breakpoint}
          largeModeComponent={
            <TabAccordionLargeMode
              tabs={groupedContent}
              summarystyle={summarystyle}
              type={type}
              iconSize={iconSize}
            />
          }
          smallModeComponent={
            <TabAccordionSmallMode
              type={type}
              groupedContent={groupedContent}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

TabAccordion.propTypes = {
  groupedContent: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
      icon: PropTypes.element,
      descriptionNode: PropTypes.element,
    }),
  ).isRequired,
  summarystyle: PropTypes.shape({
    flexDirection: PropTypes.string,
    svg: PropTypes.shape({
      marginRight: PropTypes.string,
    }),
  }),
  breakpoint: PropTypes.number,
  type: PropTypes.string,
  iconSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
};

export default TabAccordion;
