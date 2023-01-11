import React from 'react';
import IconBoxImage from './IconBoxImage';
import IconBoxTitle from './IconBoxTitle';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconBoxDescription from './IconBoxDescription';
import PropTypes from 'prop-types';

const IconBox = ({ height, icon, title, description }) => {
    return (
        <Card
            sx={(theme) => ({
                p: 2.5,
                boxShadow: theme.shadows['1'],
                height: height
            })}
        >
            <Grid container spacing={2} height={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="start"
                        flexDirection="row"
                        flexWrap={"nowrap"}
                    >
                        <Grid item xs={"auto"}>
                            <IconBoxImage
                                iconPath={icon}
                            />
                        </Grid>
                        <Grid item
                            sx={{marginLeft: 2}}
                        >
                            <IconBoxTitle title={title} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <IconBoxDescription description={description} />
                </Grid>
            </Grid>
        </Card >
    );
};

IconBox.prototype = {
    height: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.element.isRequired,
    description: PropTypes.element.isRequired,
};

export default IconBox;
