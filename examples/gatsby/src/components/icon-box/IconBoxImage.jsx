import React from 'react';
import CustomImage from '../media/CustomImage';
import PropTypes from "prop-types";


const IconBoxImage = ({ iconPath }) => {
    return (
        <CustomImage relativePath={iconPath}/>
    );
}

IconBoxImage.prototype = {
    iconPath: PropTypes.string.isRequired,
    classNameProp: PropTypes.string.isRequired
}

export default IconBoxImage