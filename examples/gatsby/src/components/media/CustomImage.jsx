import React from 'react';
import PropType from 'prop-types';
import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';
import ImageContext from '../../context/Image.context';
import CustomPng from './CustomPng';
import FrontMatterContext from '../../context/FrontMatter.context';
import Skeleton from '@mui/material/Skeleton';

const CustomSvg = ({ relativePath, className }) => {
  const [svgElement, setSvgElement] = useState(null);
  let mounted = true;
  const frontMatterContext = useContext(FrontMatterContext);

  const autoImport = () => {
    if (relativePath?.indexOf('/') !== -1) {
      import('../../images/' + relativePath).then((dataModule) => {
        mounted && setSvgElement(dataModule?.default);
      });
    }
    //  else {
    //   const path =
    //     `${frontMatterContext.templateType}/${frontMatterContext.slug}/` +
    //     relativePath;
    //   import('../../content/' + path).then((dataModule) => {
    //     mounted && setSvgElement(dataModule?.default);
    //   });
    // }
  };

  React.useEffect(() => {
    if (!svgElement) {
      autoImport();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Box className={className} id={relativePath}>
      {svgElement ? (
        <ReactSVG
          key={relativePath}
          loading={() => (
            <Skeleton variant={'rectangular'} animation={'wave'} />
          )}
          className={className}
          src={String(svgElement)}
        />
      ) : (
        <></>
      )}
    </Box>
  );
};

CustomSvg.propTypes = {
  relativePath: PropType.string.isRequired,
  className: PropType.string,
  alt: PropType.string,
};

const CustomImage = ({ relativePath, className, alt, pngSize }) => {
  const imageContext = useContext(ImageContext);
  // if (relativePath?.indexOf('/') == -1 && imageContext[relativePath]) {
  //   return (
  //     <CustomPng relativePath={relativePath} className={className} alt={alt} pngSize={pngSize}/>
  //   );
  // }

  // return <CustomSvg relativePath={relativePath} className={className} />;
  return <div></div>
};

CustomImage.propTypes = {
  relativePath: PropType.string.isRequired,
  className: PropType.string,
  alt: PropType.string,
  pngSize: PropType.shape({
    width: PropType.number,
    height: PropType.number
  })
};

export default CustomImage;
