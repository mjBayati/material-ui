import ImageContext from "./Image.context";
import PropTypes from 'prop-types';
import React from 'react';
import FrontMatterContext from "./FrontMatter.context";

const FrontMatterProviderContext = ({children, frontMatter}) => {
    return (
        <FrontMatterContext.Provider value={frontMatter}>
            {children}
        </FrontMatterContext.Provider>
    )
}

FrontMatterProviderContext.prototype = {
    children: PropTypes.element.isRequired,
    frontMatter: PropTypes.objectOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        templateType: PropTypes.string.isRequired
    }))
}

export default FrontMatterProviderContext;