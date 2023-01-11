import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from 'react';
import Grid from "@mui/material/Grid";
import PropTypes from 'prop-types';

const Badge = ({badgeText}) => {
    return (
        <Button
            variant="contained"
            color="primary"
            disableElevation={true}
            size="small"
        >
            <Typography
                variant="caption"
                sx={(theme) => ({
                    color: theme.palette.badgeText.main // TODO this should be changed to selectedTheme correct options
                })}
            >
                {badgeText}

            </Typography>
        </Button>
    )
}

const PricingItemHeadingPart = ({title, subtitle}) => {
    return (
        <Grid container
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
        >
            <Grid item>
                <Typography
                    variant="subtitle2"
                    sx={(theme) => ({
                        color: theme.palette.primary.main
                    })}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    variant="subtitle2"
                    sx={(theme) => ({
                        color: theme.palette.grey["300"]
                    })}
                >
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    );
}

PricingItemHeadingPart.prototype = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

export default PricingItemHeadingPart;

