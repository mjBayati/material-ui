import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../themes/blogTheme";
import PropTypes from 'prop-types';

const BlogContentLayout = ({ children }) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </React.Fragment>
    );
};

BlogContentLayout.prototype = {
    children: PropTypes.element.isRequired
}

export default BlogContentLayout;