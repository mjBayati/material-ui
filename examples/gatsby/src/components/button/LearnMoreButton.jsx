import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Typography from "@mui/material/Typography";
import React from 'react';
import PropTypes from "prop-types";
import * as styles from './LearnMoreButton.module.css';
import CustomLink from "../link/CustomLink";


const LearnMoreButton = ({action}) => {
    return (
        <CustomLink navigationObject={action}>
            <Button
                disableRipple={true}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textTransform: "none"
                }}
            >
                <React.Fragment>
                    <Box
                        className={styles.scrollDown}
                        sx={(theme) => ({
                            width: 28,
                            height: 48,
                            border: 1.5,
                            borderRadius: 4,
                            borderColor: theme.palette.primary.main,
                        })}
                    >
                        <CircleIcon />
                    </Box>
                    <Typography
                        mt={1.5}
                        variant="subtitle2"
                        sx={{
                            color: (theme) => theme.palette.primary.main
                        }}
                    >
                        {action.text}
                    </Typography>
                </React.Fragment>
            </Button>
        </CustomLink>
    )
}

LearnMoreButton.propTypes = {
    action: PropTypes.shape({
        text: PropTypes.string.isRequired,
        sectionId: PropTypes.string.isRequired
    }).isRequired
}

export default LearnMoreButton;