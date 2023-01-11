import React from 'react';
import PropTypes from 'prop-types';
import tabModeConfing from '../../config/tabMode.config';
import TabAccordionIconSmallMode from './TabAccordionIconSmallMode';
import TabAccordionColorSmallMode from './TabAccordionColorSmallMode';
import TabAccordionActiveTextSmallMode from './TabAccordionActiveTextSmallMode';

const TabAccordionSmallMode = ({ type, groupedContent }) => {
  if (type === tabModeConfing.IconMode) {
    return <TabAccordionIconSmallMode groupedContents={groupedContent} />;
  } else if (type === tabModeConfing.ColorMode) {
    return <TabAccordionColorSmallMode groupedContents={groupedContent} />;
  } else {
    return <TabAccordionActiveTextSmallMode groupedContents={groupedContent} />;
  }
};

TabAccordionSmallMode.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TabAccordionSmallMode;
