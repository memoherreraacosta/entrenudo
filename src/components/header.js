import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import MainNav from "./mainnav"
import style from "./header.module.css"


const Header = ({ data, siteTitle, siteDescription, menuLinks }) => (
  <header id="site-header" className={style.masthead} role="banner">
    <div className={style.masthead_info}>
      <Link to="/">
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt={siteTitle}
          className={style.site_logo}
        />
        <div className={style.site_title}>{siteTitle}</div>
        <div className={style.site_description}>{siteDescription}</div>
      </Link>
    </div>
    <MainNav menuLinks={menuLinks} />
  </header>
)

export default function MyHeader(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "logos/logo.jpeg" }) {
            childImageSharp {
              fixed(width: 150, height: 120) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Header data={data} {...props} />}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}
