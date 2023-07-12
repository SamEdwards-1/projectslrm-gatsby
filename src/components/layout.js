/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import clsx from 'clsx';
import Header from './header';
import BreakpointHint from './breakpoint';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={'min-h-screen flex flex-col px-0'}>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
     

      <main className={clsx('flex flex-col sm:max-h-full h-full sm:flex-shrink sm:mb-auto')}>
        <div className={'mx-auto mb-auto max-w-7xl w-full flex flex-col sm:max-h-full sm:h-full sm:px-6 lg:px-8'}>
          {children}
        </div>
      </main>
        
      <footer
        className={'h-16 bottom-0 flex items-center  w-full px-2 sm:px-0 lg:px-8 dark:bg-slate-100 /95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-100/75'}
      >
        <div className={'w-full h-8 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'}>
         <div className={'font-light text-slate-400 text-sm font-serif ml-8 '}>
          © {new Date().getFullYear()} &middot; Projects LRM

         
          </div> </div>
        {/* <BreakpointHint /> */}
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout;
