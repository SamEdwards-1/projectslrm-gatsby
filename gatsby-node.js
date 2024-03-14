const path = require('path');
const projects = require('./src/data/projects.json');

exports.createPages = ({ actions }) => {
  const { createPage, createRedirect } = actions;
exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const firstProject = projects[0];



  projects.forEach((project) => {
    const { slug } = project;
    const templatePath = path.resolve('./src/templates/project-template.js');
    
    createPage({
      path: `/projects/${slug}`,
      component: templatePath,
      context: {project, projects}
    });
  });

};
