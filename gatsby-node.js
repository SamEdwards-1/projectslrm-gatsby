const path = require('path');
const projects = require('./src/data/projects.json');

exports.createPages = ({ actions }) => {
  const { createPage, createRedirect } = actions;
  const firstProject = projects[0];

  // Create a redirect for the index page to the first project
  createRedirect({
    fromPath: '/',
    toPath: `/projects/${firstProject.slug}`,
    isPermanent: true,
    redirectInBrowser: true,
  });

  projects.forEach((project) => {
    const { slug } = project;
    const templatePath = path.resolve('./src/templates/project-template.js');
    
    createPage({
      path: `/projects/${slug}`,
      component: templatePath,
      context: {project, projects}
    });
  });

  projects.splice(0, 1).forEach((project) => {
    const { slug } = project;
    const templatePath = path.resolve('./src/templates/project-template.js');

    createPage({
      path: `/projects/${slug}`,
      component: templatePath,
      context: { project, projects }
    });
  });
};
