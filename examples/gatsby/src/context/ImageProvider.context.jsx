import ImageContext from "./Image.context";
import PropTypes from 'prop-types';
import React from 'react';

const ImageProviderContext = ({children, images}) => {
    return (
        <ImageContext.Provider value={images}>
            {children}
        </ImageContext.Provider>
    )
}

ImageProviderContext.prototype = {
    children: PropTypes.element.isRequired
}

export default ImageProviderContext;