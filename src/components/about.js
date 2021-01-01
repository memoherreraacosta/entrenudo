import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import style from "./about.module.css"

const AboutComponent = ({ data }) => {
  return (
    <section className={style.wrapper}>
      <h4 className={style.heading}>Acerca de Entrenudo</h4>
      <>
        <p />
        <p>
          Somos un estudio ﬂoral que busca renovar la experiencia de regalar
          ﬂores donde nos enfocamos en la personalización y en los detalles.
        </p>
        <p>
          Trabajamos de manera personalizada para que nuestros servicios se
          adapten a tus necesidades, eligiendo así el tamaño, presupuesto y
          paleta de tu agrado para el diseño de tu bouquet.
        </p>
        <p>
          Hacemos que cada detalle cuente, desde el transporte de tus flores, el
          unboxing hasta la manera de transmitir el mensaje.
        </p>
      </>
      <center>
        <Img fixed={data.aboutImage.childImageSharp.fixed} alt="" />
      </center>
    </section>
  )
}

const query = graphql`
  {
    aboutImage: file(relativePath: { eq: "logos/banner.jpeg" }) {
      childImageSharp {
        fixed(width: 1100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default function MyAboutComponent() {
  return (
    <StaticQuery
      query={query}
      render={data => <AboutComponent data={data} />}
    />
  )
}
