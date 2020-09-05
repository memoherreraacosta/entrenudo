import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./about.module.css"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Entrenudo"
        description="Entrenudo Estudio Floral"
        image="/logo_verde.jpeg"
        pathname="/:id"
        // Boolean indicating whether this is an article:
        // article
      />
      <section className={style.wrapper}>
        <h1 className={style.heading}>Acerca de Nosotros</h1>
        <div>
          <figure className={style.image}>
            <Img
              fixed={data.aboutImage.childImageSharp.fixed}
              alt=""
            />
          </figure>

          <p>
            This site was built with Gatsby and patience. Learning Gatsby
            requires taking the time to fully understand and embrace the
            principles of React <em>and</em> static site generators.
          </p>
          <p>
            On a macro level, Gatsby combines the best parts from CMSes
            (templates and object-orientation) with the best parts of React
            (components) and the best parts of the Old (dare I say "Classic?")
            Web (DWTs and static sites) to create performant accessible and
            robust websites for today and for the future.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    aboutImage: file(relativePath: { eq: "logo_blanco.jpeg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
