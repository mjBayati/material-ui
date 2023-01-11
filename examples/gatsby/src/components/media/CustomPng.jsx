import PropType from "prop-types";
import React, { useContext } from 'react';
import ImageContext from "../../context/Image.context";
// import { GatsbyImage } from "gatsby-plugin-image"


const CustomPng = ({ relativePath, className, alt, pngSize }) => {
    const imageContext = useContext(ImageContext);
    return (
        <div></div>
        // <GatsbyImage alt={alt || imageContext[relativePath].alt} image={imageContext[relativePath].data} className={className}
        //     style={{ width: pngSize?.width, height: pngSize?.height }}
        // // width={60}
        // // height={60}
        // />
    )
}


CustomPng.prototype = {
    relativePath: PropType.string.isRequired,
    className: PropType.string.isRequired,
    alt: PropType.string,
    pngSize: PropType.shape({
        width: PropType.number,
        height: PropType.number
    })
}

export default CustomPng;