import React from 'react';
import Grid from "@mui/material/Grid";
import CustomizedContainer from './CustomizedContainer';


const FooterContainer = ({ children, background }) => {
    return (
        <Grid container sx={{ backgroundColor: background }}>
            <CustomizedContainer>
                {children}
            </CustomizedContainer>
        </Grid>
    )
}

export default FooterContainer