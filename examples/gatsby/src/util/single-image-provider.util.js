class Image {
    constructor(name, relativeDirectory, typeOfTemplate, gatsbyImageData) {
        this.name = name;
        this.relativeDirectory = relativeDirectory;
        this.typeOfTemplate = typeOfTemplate;
        this.gatsbyImageData = gatsbyImageData;
    }

    static getImageByGraphQuery(gatsbyImage) {
        const pathToImageSlices = gatsbyImage.absolutePath.split("/").reverse();
        const name = pathToImageSlices[0];
        const relativeDirectory = pathToImageSlices[1];
        const typeOfTemplate = pathToImageSlices[2];
        const gatsbyImageData = gatsbyImage.childImageSharp.gatsbyImageData;
        return new Image(name, relativeDirectory, typeOfTemplate, gatsbyImageData)
    }
}


export default class SingleBlogImageProviderUtil {
    constructor(images) {
        this.images = images;
    }

    static getSingleBlogImageProviderUtil(allImages) {
        const images = allImages.map(imageQuery => Image.getImageByGraphQuery(imageQuery))
        return new SingleBlogImageProviderUtil(images);
    }

    getImagesByTemplateAndPath(title) {
        const result = {};
        this.images.forEach(image => {
            result[image.name] = {data: image.gatsbyImageData, alt: title};
        });
        return result;
    }
}
