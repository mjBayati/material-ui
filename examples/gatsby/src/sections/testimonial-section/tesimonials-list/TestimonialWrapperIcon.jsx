import CustomImage from "../../../components/media/CustomImage";
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as styles from './TestimonialWrapperIcon.module.css';

const TestimonialWrapperIcon = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={(theme) => ({
                    position: 'absolute',
                    [theme.breakpoints.up("lg")]: {
                        left: 45,
                        bottom: 280
                    },
                    [theme.breakpoints.between("md", "lg")]: {
                        // left: 60,
                        bottom: 312
                    },
                    [theme.breakpoints.between("sm", "md")]: {
                        bottom: 280
                    },
                    [theme.breakpoints.down("sm")]: {
                        bottom: 340
                    }
                })}>
                    <CustomImage
                        className={styles.testimonialWrapperIcon}
                        relativePath={'testimonial-section/TestimonialWrapperIcon.svg'}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}


export default TestimonialWrapperIcon;