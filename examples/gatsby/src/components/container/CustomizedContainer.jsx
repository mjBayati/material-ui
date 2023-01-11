import React from 'react';
import Container from "@mui/material/Container";
import PropTypes from 'prop-types';

const CustomizedContainer = ({ children }) => {
    return (
        <Container maxWidth="lg" sx={(theme) => ({
            [theme.breakpoints.up("lg")]: {
                paddingLeft: 6,
                paddingRight: 6,
            },
            [theme.breakpoints.between("md","lg")]: {
                paddingLeft: 5.75,
                paddingRight: 5.75,
            },
            [theme.breakpoints.between("sm", "md")]: {
                paddingLeft: 4,
                paddingRight: 4,
            },
            [theme.breakpoints.between("xs", "sm")]: {
                paddingLeft: 3,
                paddingRight: 3,
            },
            backgroundColor: "transparent"
        })}>
            {children}
        </Container>
    )
}

CustomizedContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element).isRequired, PropTypes.element]),
    backgroundColor: PropTypes.string,
    disableBackgroundColor: PropTypes.bool
}

export default CustomizedContainer;