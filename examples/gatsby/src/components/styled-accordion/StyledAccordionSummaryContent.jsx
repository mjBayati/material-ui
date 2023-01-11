import Grid from '@mui/material/Grid';
import React from 'react';
import PropTypes from 'prop-types';

const AccordionSummaryContent = ({ startIcon, title, endIcon, expanded, endIconExpand, index }) => {
    return (
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item lg={11} md={11} sm={11} xs={10.5}>
                <Grid container alignItems="center" flexWrap='nowrap'>
                    {startIcon != null &&
                        <Grid
                            item
                            xs={'auto'}
                            marginRight={1.5}
                            lineHeight={0}
                        >
                            {startIcon}
                        </Grid>
                    }

                    <Grid
                        item
                        xs={'auto'}
                        width={{ lg: '90%', md: '90%', sm: '90%', xs: '80%' }}
                    >
                        {title}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={0.75} md={0.5} sm={0.5} xs={1} className="accordionEndIcon" display={expanded === index ? "initial": "none"}>
                {endIcon}
            </Grid>
            <Grid item lg={0.75} md={0.5} sm={0.5} xs={1} className="accordionEndIcon" display={expanded === index ? "none": "initial"}>
                {endIconExpand}
            </Grid>
        </Grid >
    );
};

AccordionSummaryContent.propTypes = {
    startIcon: PropTypes.element,
    title: PropTypes.element.isRequired,
    endIcon: PropTypes.element.isRequired,
    expanded: PropTypes.number,
    endIconExpand: PropTypes.element,
    index: PropTypes.number,
};

export default AccordionSummaryContent;
