import React from 'react';
import PerformanceFeatureElement from './PerformanceFeatureElement';
import Card from '@mui/material/Card';
import features from '../../sections/hero-sections/home-hero-section/data/performanceFeatures.data';
import SlickCarousel from '../carousel/SlickCarousel';

const PerformanceFeaturesListInSmallMode = () => {
  const items = features.map((feature, index) => (
    <PerformanceFeatureElement
      title={feature.subtitle}
      description={feature.description}
      key={index}
    />
  ));

  const carouselResponsiveSettings = {
    lg: {
      slidesToShow: 4,
      showDots: false,
    },
    md: {
      slidesToShow: 4,
      showDots: false,
      slidesToScroll: 2,
    },
    sm: {
      slidesToShow: 2,
      showDots: false,
      slidesToScroll: 2,
    },
    xs: {
      slidesToShow: 2,
      showDots: false,
      slidesToScroll: 2,
    },
  };

  const carouselPageStyle = {
    padding: 1,
    spacing: 1,
    justifyContent: 'start',
    alignItems: 'center',
    textAlign: 'start',
  };

  return (
    <Card
      sx={{
        boxShadow: (theme) => theme.shadows['2'],
        borderRadius: 2,
      }}
    >
      <SlickCarousel
        items={items}
        responsivenessSetting={carouselResponsiveSettings}
        pageStyle={carouselPageStyle}
      />
    </Card>
  );
};

export default PerformanceFeaturesListInSmallMode;
