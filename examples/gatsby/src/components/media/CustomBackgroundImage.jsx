import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { graphql, useStaticQuery } from "gatsby";

const CustomBackgroundImage = ({ backgroundImagePath, children }) => {
    const [imageElement, setImageElement] = useState(null);

    // const data = useStaticQuery(graphql`
    //      query {
    //           mdx {
    //                 id
    //                 fileAbsolutePath                    
    //           }
    //      }
    // `);
    const autoImport = () => {
        if (backgroundImagePath.indexOf('/') !== -1) {
            import('../../images/' + backgroundImagePath).then(dataModule => {
                setImageElement(dataModule?.default);
            })
        }
        // else {
        //     const directory = data.mdx?.fileAbsolutePath?.substring(0, data.mdx?.fileAbsolutePath?.lastIndexOf('/'));
        //     const relativeDir = directory.split('/').slice(directory.split('/').length - 2, directory.split('/').length);
        //     const path = `${relativeDir[0]}/${relativeDir[1]}/` + backgroundImagePath;
        //     import('../../content/' + path).then(dataModule => {
        //         setImageElement(dataModule?.default);
        //     })
        // }
    }

    React.useEffect(() => {
        if (!imageElement) {
            autoImport();
        }
    }, []);

    return (
        <Box
            sx={{
                backgroundImage: `url(${imageElement})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%"
            }}
        >
            {children}
        </Box>
    )
}

CustomBackgroundImage.prototype = {
    backgroundImagePath: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default CustomBackgroundImage;