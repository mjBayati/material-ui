import React from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../../themes/selectedItemTheme";
// import Box from '@mui/material/Box'

const SelectedItemLayout = ({ children }) => {
    return (
        <React.Fragment>
            {/* <ThemeProvider theme={theme}> */}
            {/* <Box> */}
            {children}
            {/* </Box> */}
            {/* </ThemeProvider> */}
        </React.Fragment>
    );
};

export default SelectedItemLayout;