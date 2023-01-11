import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid';
import * as styles from './CustomCollapse.module.css';

const CustomCollapseTitle = ({ expanded, setExpanded, title, icon }) => {
    return (
        <Grid container flexDirection="row" alignItems="center" onClick={() => setExpanded(!expanded)} sx={{
            cursor: 'pointer'
        }}>
            <Grid item mr={1}>
                {title}
            </Grid>
            <Grid item sx={{ lineHeight: 0 }} className={styles.LoadMoreIcon + ` ${expanded}`}>
                {icon}
            </Grid>
        </Grid >
    );
};

CustomCollapseTitle.prototype = {
    title: PropTypes.element.isRequired,
    icon: PropTypes.element.isRequired,
    expanded: PropTypes.bool.isRequired,
    setExpanded: PropTypes.bool.isRequired
}

export default CustomCollapseTitle