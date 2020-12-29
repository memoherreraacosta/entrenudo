import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  /*
  / <center/> is a tag initialized at 'layout.module.css'
  */
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Entrenudo"
        description="Entrenudo Estudio Floral"
        image="/logos/logo_verde.jpeg"
        pathname="/:id"
      />
      <center>
        <Img fixed={data.image_404.childImageSharp.fixed} alt="" />
        <h3>Alto ahi, Error 404</h3>
        <p>La pagina que buscas, no existe :(</p>
      </center>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    image_404: file(relativePath: { eq: "logos/404.jpeg" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`