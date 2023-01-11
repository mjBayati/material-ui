import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import React from 'react';
import PropTypes from 'prop-types';
import CustomLink from "../link/CustomLink";

const ViewAllActionButton = ({ action }) => {
    return (
        <Grid container alignItems="center" justifyContent="end">
            <Grid item>
                <CustomLink
                    navigationObject={action}
                    className='viewAllBlogAndKBSection'
                >
                    <Button
                        endIcon={<ArrowForwardIcon />}
                        sx={(theme) => ({
                            color: theme.palette.primary.main
                        })}
                    >
                        <Typography
                            variant="buttonLarge"
                            textAlign="center"
                            sx={(theme) => ({
                                color: theme.palette.primary.main
                            })}
                        >
                            {action.text}
                        </Typography>
                    </Button>
                </CustomLink>
            </Grid>
        </Grid>
    )
}

ViewAllActionButton.propTypes = {
    action: PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }).isRequired
}

export default ViewAllActionButton;