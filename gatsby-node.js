const path = require('path');
const projects = require('./src/data/projects.json');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  projects.forEach((project) => {
    const { slug } = project;
    const templatePath = path.resolve('./src/templates/project-template.js');

    createPage({
      path: `/projects/${slug}`,
      component: templatePath,
      context: project,
    });
  });
};
