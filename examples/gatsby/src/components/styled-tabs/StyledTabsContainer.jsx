import React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';



const StyledTabsContainer = ({children}) => {
    return (
        <Grid container spacing={3}>
            {React.Children.map(children, (child, index) => (
                <Grid item xs={12} key={index} >
                    {child}
                </Grid>
            ))}
        </Grid>
    );
}

StyledTabsContainer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element).isRequired])
}

export default StyledTabsContainer;