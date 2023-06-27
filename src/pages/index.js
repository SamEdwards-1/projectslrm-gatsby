import * as React from 'react';
import { Link } from 'gatsby';
// import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PropTypes from 'prop-types';



// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=projectslrm`;

const IndexPage = ({ location, data }) => {
  const projects = data.allProjectsJson.nodes;


  return (<Layout location={location}>
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div></Layout>
  );
  // return (<Layout>
  //   <div className={'w-full max-h-full'}>
  //     <StaticImage
  //       src="../images/2DC078EC-2D66-48F8-A096-4301188D19F2.JPG"
  //       loading="eager"
  //       width={1956}
  //       height={2048}
  //       quality={100}
  //       formats={["auto", "webp", "avif"]}
  //       alt=""
  //       className={'object-contain'}
  //     /></div>
  // </Layout>)
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" description="Projects LRM home page" children={undefined} />;

//proptype validation:
IndexPage.propTypes = {
  location: PropTypes.any,
  data: PropTypes.any,
};

export default IndexPage;
export const query = graphql`
  query {
    allProjectsJson {
      nodes {
        title
        slug
      }
    }
  }
`;