/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import EntrenudoImage from "./entrenudoimage"

// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  /*
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  */

  return (
    <>
      <EntrenudoImage src="/demo_image.jpg" alt="" />
      <main id="primary">
        {children}
      </main>
    </>
  )
}

export default Layout
