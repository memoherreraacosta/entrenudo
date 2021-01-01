import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import style from "./footer.module.css"

const Footer = ({ data, siteTitle }) => (
  <>
    <footer className={style.colophon}>
      <Img fixed={data.file.childImageSharp.fixed} />
      {siteTitle} © {new Date().getFullYear()}
    </footer>
  </>
)

const query = graphql`
  query {
    file(relativePath: { eq: "logos/logo_verde.jpeg" }) {
      childImageSharp {
        fixed(height: 38) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default function MyFooter(props) {
  return (
    <StaticQuery
      query={query}
      render={data => <Footer data={data} {...props} />}
    />
  )
}
