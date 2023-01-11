import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from 'react';
import PropTypes from "prop-types";

const FixedLineTypography = ({lineToShow, content, variant, color, visibleOnOverflow, textAlign, component}) => {
    return (
        <Box>
            <Typography
                component={component}
                textAlign={textAlign}
                variant={variant}
                sx={(theme) => ({
                    color: color,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: visibleOnOverflow ? "visible":"hidden",
                    textOverflow: visibleOnOverflow ? "ellipsis":"clip",
                    lineHeight: "1.5em",
                    [theme.breakpoints.up("lg")]: {
                        WebkitLineClamp: lineToShow.lg,
                        height: `${1.5 * lineToShow.lg}em`
                    },
                    [theme.breakpoints.up("md")]: {
                        WebkitLineClamp: lineToShow.md,
                        height: `${1.5 * lineToShow.md}em`
                    },
                    [theme.breakpoints.up("sm")]: {
                        WebkitLineClamp: lineToShow.sm,
                        height: `${1.5 * lineToShow.sm}em`
                    },
                    [theme.breakpoints.up("xs")]: {
                        WebkitLineClamp: lineToShow.xs,
                        height: `${1.5 * lineToShow.xs}em`
                    },
                })}
            >
                {content}
            </Typography>
        </Box>
    )
}


FixedLineTypography.prototype = {
    content: PropTypes.string.isRequired,
    lineToShow: PropTypes.objectOf(PropTypes.shape({
        lg: PropTypes.number.isRequired,
        md: PropTypes.number.isRequired,
        sm: PropTypes.number.isRequired,
        xs: PropTypes.number.isRequired
    })),
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    visibleOnOverflow: PropTypes.bool,
    textAlign: PropTypes.object,
    component: PropTypes.string
}

export default FixedLineTypography;