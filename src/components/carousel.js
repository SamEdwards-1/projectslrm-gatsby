import React from "react";
import { Carousel } from "react-responsive-carousel";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const ProjectCarousel = ({ images }) => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        extension: { eq: "jpg" }
      }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 100
            )
          }
        }
      }
    }
  }
`);

  const getImageData = (imagePath) => {
    console.info('getImageData', imagePath)
    const imageNode = data.allFile.edges.find(
      (edge) => {
        console.info('edge.node.relativePath', edge.node.relativePath)
        return `../images/${edge.node.relativePath}` === imagePath;
      }
    );
    return getImage(imageNode.node);
  };

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={1000}
      stopOnHover={false}
      swipeable={true}
      emulateTouch={true}
      centerMode={true}
      centerSlidePercentage={100}
      className={"h-full w-full"}
    >
          {images.map((image, index) => {
            const imageData = getImageData(image);
            return (
              <div key={index}>
                {imageData && <StaticImage image={imageData} alt="" />}
              </div>
            );
          })
        }
    </Carousel>
  );
};

export default ProjectCarousel;
