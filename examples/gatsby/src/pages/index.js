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


export default function Index() {
  const pt = { xl: 18.75, lg: 18.75, md: 15, sm: 12.5, xs: 12.5 };
  return (
    <PagesDefaultLayout>
       {/* <PricingTableSection
          pt={pt}
          pricingDataKey={'WINDOWS_VS_LINUX'}
          pageTitle={'Cloud VPS'}
        /> */}
      <FullWidthContainer pt={pt}>
          <WhyChooseSection />
      </FullWidthContainer>
      <MapSection pt={pt} />
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
