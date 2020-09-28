import React from "react"
import style from "./about.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutImage: file(relativePath: { eq: "logo_blanco.jpeg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className={style.wrapper}>
      <h1 className={style.heading}>Acerca de Nosotros</h1>
      <div>
        <figure className={style.image}>
          <Img fixed={data.aboutImage.childImageSharp.fixed} alt="" />
        </figure>

        <p>
          This site was built with Gatsby and patience. Learning Gatsby requires
          taking the time to fully understand and embrace the principles of
          React <em>and</em> static site generators.
        </p>
        <p>
          On a macro level, Gatsby combines the best parts from CMSes (templates
          and object-orientation) with the best parts of React (components) and
          the best parts of the Old (dare I say "Classic?") Web (DWTs and static
          sites) to create performant accessible and robust websites for today
          and for the future.
        </p>
      </div>
    </section>
  )
}

export default About
