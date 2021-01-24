/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
    <>
      <div className="h-full bg-gray-100">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="container p-4 m-4 mx-auto">
          <main>{children}</main>
        </div>
        <footer className="p-4 bg-purple-600 mt-4 text-white">
          © {new Date().getFullYear()}, Built by
            {` `}
          <a href="https://github.com/rockaBe">rockaBe</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
