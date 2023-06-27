import React from 'react';
import { Link } from 'gatsby';

const ProjectsSubnav = ({ projects }) => {
  return (
    <nav>
      {projects.map((project, index) => (
        <Link key={index} to={`/slideshow/${index}`}>
          {project.title}
        </Link>
      ))}
    </nav>
  );
};

export default ProjectsSubnav;
