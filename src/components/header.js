import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import MainNav from "./mainnav"
import style from "./header.module.css"

const Header = ({ siteTitle, siteDescription, menuLinks }) => (
  <header id="site-header" className={style.masthead} role="banner">
    <div className={style.masthead_info}>
      <Link to="/">
        <img
          src="/logo.jpeg"
          width="366"
          height="374"
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

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header

/*
export const query = graphql`
  {
    logoImage: file(relativePath: { eq: "./logos/logo.jpeg" }) {
      childImageSharp {
        fixed(width: 366, height: 374) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
<Img
fixed={data.logoImage.childImageSharp.fixed}
alt={siteTitle}
className={style.site_logo}
/>
*/