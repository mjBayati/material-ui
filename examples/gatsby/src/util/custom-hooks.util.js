import {useEffect, useState} from "react";

export const useProgressiveImage = src => {
    // const [sourceLoaded, setSourceLoaded] = useState(DefaultBackground)
    //
    // useEffect(() => {
    //     const img = new Image()
    //     img.src = src
    //     img.onload = () => setSourceLoaded(src)
    // }, [src])

    // return sourceLoaded
    return src;
}

export const useProgressiveImageOnDictOfImages = srcImages => {
    // const [sourceLoaded, setSourceLoaded] = useState({})
    //
    // useEffect(() => {
    //     Object.keys(srcImages).forEach(key => {
    //         const img = new Image()
    //         img.src = srcImages[key]
    //         img.onload = () => setSourceLoaded((prevStage) => ({...prevStage, [key]: srcImages[key]}))
    //     })
    // }, [srcImages])
    //
    // return sourceLoaded

    return srcImages;
}

export const useWindowsSize = () => {
    let defaultWidth = process.env.GATSBY_SCREEN_WIDTH;
    if (typeof window !== `undefined`) {
        defaultWidth = window.innerWidth
    }

    const [windowsSize, setWindowsSize] = useState(defaultWidth);


    useEffect(() => {
        function handleResize() {
            setWindowsSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        setWindowsSize(window.innerWidth);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return windowsSize;
}
