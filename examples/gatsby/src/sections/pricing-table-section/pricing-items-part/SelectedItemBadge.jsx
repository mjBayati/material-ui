import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

const SelectedItemBadge = ({badge}) => {
    return (
        <Box
            sx={{
                backgroundColor: (theme) => theme.palette.primary.light,
                width: 1,
                padding: 1.2,
                position: "relative",
                top: 4,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8
            }}
        >
            <Typography
                variant="subtitle1"
                textAlign="center"
                sx={{color: (theme) => theme.palette.primary.main}}
            >
                {badge}
            </Typography>
        </Box>
    )
}

SelectedItemBadge.prototype = {
    badge: PropTypes.string.isRequired
}

export default SelectedItemBadge;