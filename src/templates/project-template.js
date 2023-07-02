import React from 'react';
import ProjectCarousel from '../components/carousel';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
// import ProjectsSubnav from '../components/projects-subnav';

const ProjectTemplate = ({ pageContext }) => {
  const { project } = pageContext;
  const { title, slug, images } = project;


  return (<Layout>
    {/* <ProjectsSubnav projects={projects} /> */}
    <div className={'px-0 w-full h-full mx-auto flex items-center content-center'}>
      {/* <h1 className={'font-serif text-md sm:text-2xl'}>{title}</h1> */}
      <ProjectCarousel images={images} />
    </div>
  </Layout>
    
  );
};

ProjectTemplate.propTypes = {
  pageContext: PropTypes.object,
};

export default ProjectTemplate;
