/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from 'react';
import Layout from './src/components/layout';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en-US' });
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props} location={props.location}>{element}</Layout>;
};

 