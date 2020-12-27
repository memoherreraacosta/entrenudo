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
        image="/logos/logo_verde.jpeg"
        pathname="/:id"
      />
      <section className={style.wrapper}>
        <h1 className={style.heading}>Acerca de Nosotros</h1>
        <div>
          <figure className={style.image}>
            <Img fixed={data.aboutImage.childImageSharp.fixed} alt="" />
          </figure>
          <p>
            Somos un estudio ﬂoral que busca renovar la experiencia de regalar
            ﬂores.
          </p>
          <p>Nos enfocamos en la personalización y en los detalles.</p>
          <p>
            Trabajamos de manera personalizada para que nuestros servicios se
            adapten a tus necesidades, eligiendo así el tamaño, presupuesto y
            paleta de tu agrado para el diseño de tu bouquet.
          </p>
          <p>
            Hacemos que cada detalle cuente, desde el transporte de tus flores,
            el unboxing hasta la manera de transmitir el mensaje.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    aboutImage: file(relativePath: { eq: "main_banner.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
