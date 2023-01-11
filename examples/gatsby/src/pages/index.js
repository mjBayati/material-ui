import React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import ProTip from '../components/ProTip';
// import Link from '../components/Link';
// import Copyright from '../components/Copyright';
import FullWidthContainer from '../components/container/FullWidthContainer';
import WhyChooseSection from '../sections/why-choose-section/WhyChooseSection';
import MapSection from '../sections/map-section/MapSection';
import PagesDefaultLayout from '../components/layouts/PagesDefaultLayout';
import PricingTableSection from '../sections/pricing-table-section/PricingTableSection';
import mostPopularServicesData from '../sections/most-popular-services-sections/data/mostPopularServices.data';
import MostPopularServicesSection from '../sections/most-popular-services-sections/MostPopularServicesSection';
import TestimonialSection from '../sections/testimonial-section/TestimonialSection';
import PricingCtaSection from '../sections/pricing-cta-section/PricingCtaSection';
import PricingCtaTempData from '../sections/pricing-cta-section/data/pricingCtaDescription.data';
import HomeHeroSection from '../sections/hero-sections/home-hero-section/HomeHeroSection';


export default function Index() {
  const pt = { xl: 18.75, lg: 18.75, md: 15, sm: 12.5, xs: 12.5 };
  return (
    <PagesDefaultLayout>
        <HomeHeroSection mt={{ lg: 0, md: 12, sm: 8, xs: 3 }} />
       <PricingTableSection
          pt={pt}
          pricingDataKey={'WINDOWS_VS_LINUX'}
          pageTitle={'Cloud VPS'}
        />

      <FullWidthContainer pt={pt}>
          <WhyChooseSection />
      </FullWidthContainer>
      <MapSection pt={pt} />
      <MostPopularServicesSection
          pt={pt}
          title="Our Most Popular Services"
          data={mostPopularServicesData}
        />
      <TestimonialSection pt={pt} testimonialIds={[1, 2, 4, 5]} />
      <PricingCtaSection pt={pt} data={PricingCtaTempData} />

      {/* <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby example
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box> */}
    </PagesDefaultLayout>
  );
}
