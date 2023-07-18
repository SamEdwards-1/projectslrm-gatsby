import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

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
              layout: CONSTRAINED
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
    //console.info('getImageData', imagePath);
    const imageNode = data.allFile.edges.find(
      (edge) => {
        return `../images/${edge.node.relativePath}` === imagePath;
      }
    );
    //console.info('imageNode', imageNode);
    return getImage(imageNode.node);
  };

  return (<>
    <div className={'mx-auto my-auto p-2 sm:px-6 lg:px-8  h-full'}>
      <Carousel
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={false}
        dynamicHeight={true}
        width={'100%'}
        interval={5000}
        transitionTime={1000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        centerMode={false}
        preventMovementUntilSwipeScrollTolerance={true}
        animationHandler="fade"
        autoFocus={true}
      >
       
        {images.map((image, index) => {
          const imageData = getImageData('../images/' + image);
          console.info('imageData ' + image, imageData); 
          return imageData && 
            <picture key={`${image}_${index}`}>
              { imageData.images.sources.map((imageSource, index2) => 
                <source type={imageSource.type} srcSet={imageSource.srcSet} key={`${image}_source_${index2}`} />)}
              {imageData.images.fallback && 
              <img src={imageData.images.fallback.src} 
                style={{}}
                key={`${image}_fallback_${index}`} 
                alt="" /> }
            </picture>;
        })}
      </Carousel>
    </div>
  </>);
};

ProjectCarousel.propTypes = {
  images: PropTypes.array,
};

export default ProjectCarousel;
