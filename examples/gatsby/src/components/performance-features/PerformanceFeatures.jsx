import React from 'react';
import PolymorphicOnResizeContainer from '../container/PolymorphicOnResizeContainer';
import PerformanceFeaturesListInLargeMode from './PerformanceFeaturesListInLargeMode';
import PerformanceFeaturesListInSmallMode from './PerformanceFeaturesListInSmallMode';
import { useTheme } from '@mui/material/styles';

export default function PerformanceFeature() {
  const theme = useTheme();

  return (
    <PolymorphicOnResizeContainer
      breakpoint={theme.breakpoints.values.sm}
      smallModeComponent={<PerformanceFeaturesListInSmallMode />}
      largeModeComponent={<PerformanceFeaturesListInLargeMode />}
    />
  );
};
