import React from 'react';
import PropTypes from 'prop-types';
import CustomImage from '../media/CustomImage';
import * as styles from './TabAccordionIcon.module.css';
import Forex from '../../images/most-popular-services/forex.inline.svg';
import Linux from '../../images/most-popular-services/linux.inline.svg';
import Rdp from '../../images/most-popular-services/rdp.inline.svg';
import Windows from '../../images/most-popular-services/window.inline.svg';
import PropType from 'prop-types';

const TabAccordionGroupedContentIcon = ({ iconPath, serviceName, pngSize }) => {
  if (serviceName === 'Windows') {
    return <Windows />;
  } else if (serviceName === 'Linux') {
    return <Linux />;
  } else if (serviceName === 'Forex') {
    return <Forex />;
  } else if (serviceName === 'RDP') {
    return <Rdp />;
  }
  return (
    <CustomImage
      pngSize={pngSize}
      relativePath={iconPath}
      className={styles.tabAccordion}
      alt={serviceName}
    />
  );
};

TabAccordionGroupedContentIcon.propTypes = {
  serviceName: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  pngSize: PropType.shape({
    width: PropType.number,
    height: PropType.number,
  }),
};

export default TabAccordionGroupedContentIcon;
