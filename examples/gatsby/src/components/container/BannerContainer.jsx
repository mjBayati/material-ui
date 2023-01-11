import React from 'react';
import Box from '@mui/material/Box';

const BannerContainer = ({ children, background }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        position: 'relative',
        marginLeft: '-50vw',
        left: '50%',
        backgroundColor: background,
      }}
    >
      {children}
    </Box>
  );
};

export default BannerContainer;
