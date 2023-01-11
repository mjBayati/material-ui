import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    overflowX: 'hidden',
                },
            },
        },
    },
});

const GlobalCssOverride = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

GlobalCssOverride.prototype = {
    children: PropTypes.element.isRequired
}

export default GlobalCssOverride;
