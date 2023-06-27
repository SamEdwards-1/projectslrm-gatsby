import React from 'react';
import ProjectCarousel from '../components/carousel';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import ProjectsSubnav from '../components/projects-subnav';

const ProjectTemplate = ({ pageContext }) => {
  const { project, projects } = pageContext;
  const { title, slug, images } = project;


  return (<Layout>
    <ProjectsSubnav projects={projects} />
    <div className={'px-2 sm:px-6 lg:px-8 w-full h-full mx-auto block'}>
      <h1 className={'font-sans text-lg'}>{title}</h1>
      <ProjectCarousel images={images} />
    </div>
  </Layout>
    
  );
};

ProjectTemplate.propTypes = {
  pageContext: PropTypes.object,
};

export default ProjectTemplate;
