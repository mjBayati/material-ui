import Divider from "@mui/material/Divider";
import React from "react";
import PropTypes from 'prop-types';

const CustomHorizontalDivider = ({sx}) => {
    return (
        <Divider
            orientation="horizontal"
            sx={Object.assign({}, {
                    borderColor: (theme) => theme.palette.border.main
                }, sx || {})
            }
        />
    )
}

CustomHorizontalDivider.prototype = {
    sx: PropTypes.object
}

export default CustomHorizontalDivider;