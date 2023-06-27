import React from 'react';
import ProjectCarousel from '../components/carousel';

const ProjectTemplate = ({ pageContext }) => {
  const { title, slug, images } = pageContext;

  return (
    <div>
      <h1>{title}</h1>
      <ProjectCarousel images={images} />
      {/* <p>{slug}</p>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div> */}
    </div>
  );
};

export default ProjectTemplate;
