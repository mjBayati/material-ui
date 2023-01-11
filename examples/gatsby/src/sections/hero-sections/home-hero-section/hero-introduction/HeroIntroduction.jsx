import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react';
import CustomButton from "../../../../components/button/CustomButton";
import heroIntroductionData from '../data/heroIntroduction.data'
import PropTypes from 'prop-types';

const IntroductionTitle = ({ title }) => {
    return (
        <Typography
            variant="h1"
            sx={(theme) => ({
                [theme.breakpoints.down('md')]: {
                    textAlign: "center"
                }
            })}
        >
            {title}
        </Typography>
    );
}

IntroductionTitle.prototype = {
    title: PropTypes.string.isRequired
}

const IntroductionDescription = ({ description }) => {
    return (
        <Typography
            variant="h6"
            sx={(theme) => ({
                color: theme.palette.text.secondary,
                [theme.breakpoints.down('md')]: {
                    textAlign: "center"
                }
            })}
        >
            {description}
        </Typography>
    );
}

IntroductionDescription.prototype = {
    description: PropTypes.string.isRequired
}

const IntroductionAction = ({ action }) => {
    return (
        <CustomButton
            id="heroStartingButton"
            variant="contained"
            endIcon={<ArrowDownwardIcon />}
            color="primary"
            navigationObject={action}
            contentText={action.actionText}
            sx={{
                boxShadow: (theme) => theme.shadows["0"],
            }}
        />
    );
}

IntroductionAction.prototype = {
    action: PropTypes.objectOf(PropTypes.shape({
        actionText: PropTypes.string.isRequired,
        sectionId: PropTypes.string.isRequired
    })).isRequired
}

const HeroIntroduction = () => {
    return (
        <Grid
            container
            spacing={1}
        >
            <Grid item xs={12}>
                <IntroductionTitle title={heroIntroductionData.title} />
            </Grid>
            <Grid item xs={12} mt={2}>
                <IntroductionDescription description={heroIntroductionData.description} />
            </Grid>
            <Grid item
                xs={12}
                mt={4}
                sx={(theme) => ({
                    [theme.breakpoints.down('md')]: {
                        display: "flex",
                        justifyContent: "center",
                    }
                })}
            >
                <IntroductionAction action={heroIntroductionData.action} />
            </Grid>
        </Grid>
    );
};

export default HeroIntroduction