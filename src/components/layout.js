/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import clsx from "clsx";
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={'min-h-screen flex flex-col justify-between'}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
     

      <main className={clsx('mb-auto')}>
          <div className={"mx-auto max-w-7xl sm:px-6 lg:px-8"}>
            {children}
          </div>
        </main>
        
        <footer
        className={'h-16 bottom-0 flex items-center  w-full px-2 sm:px-6 lg:px-8 dark:bg-slate-100 /95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-100/75'}
      ><div className={'font-light text-black mx-auto  max-w-7xl  w-full'}>
          © {new Date().getFullYear()} &middot; Projects LRM
        </div>
        </footer>
    </div>
  )
}

export default Layout
