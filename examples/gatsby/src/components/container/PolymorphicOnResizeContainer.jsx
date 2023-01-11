import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import WindowSizeContext from '../../context/WindowSize.Context';

const PolymorphicOnResizeComponent = ({
  smallModeComponent,
  largeModeComponent,
  breakpoint,
}) => {
  const windowSize = useContext(WindowSizeContext) || 1200;

  const devices = [
    {
      type: 'small',
      range: [0, breakpoint],
    },
    {
      type: 'large',
      range: [breakpoint, Infinity],
    },
  ];

  const isInRange = (size, range) => {
    return range[0] <= size && range[1] > size;
  };

  const findCurrentType = (currentWindowSize) => {
    const newMode = devices.find((device) =>
      isInRange(currentWindowSize, device.range),
    );
    return newMode?.type;
  };

  const [currentType, setCurrentType] = useState(findCurrentType(windowSize));

  const changeMode = (newWindowSize) => {
    const currentDevice = devices.find((device) => device.type === currentType);
    if (isInRange(newWindowSize, currentDevice.range)) {
      return;
    }
    setCurrentType(findCurrentType(newWindowSize));
  };

  useEffect(() => {
    changeMode(windowSize);
  }, [windowSize]);

  return (
    <React.Fragment key={currentType}>
      {currentType === 'small' ? smallModeComponent : largeModeComponent}
    </React.Fragment>
  );
};

PolymorphicOnResizeComponent.propTypes = {
  smallModeComponent: PropTypes.element,
  largeModeComponent: PropTypes.element,
  breakpoint: PropTypes.number,
};

export default PolymorphicOnResizeComponent;
