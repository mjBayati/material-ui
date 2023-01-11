

import React from "react";
import IconButton from "@mui/material/IconButton/IconButton";
import PropTypes from 'prop-types';

const CustomIconButton = ({
    id,
    icon,
    color,
    sx,
    onClick,
    className
}) => {
    return (
        <IconButton
            id={id}
            color={color}
            onClick={onClick}
            className={className}
            sx={sx}
        >
            { icon }
        </IconButton>
    )
}

CustomIconButton.prototype = {
    icon: PropTypes.element,
    color: PropTypes.string.isRequired,
    sx: PropTypes.object,
    onClick: PropTypes.func,
    className: PropTypes.object,
    textColor: PropTypes.string,
    id: PropTypes.string
}

export default CustomIconButton;