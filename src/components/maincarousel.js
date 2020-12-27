import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Carousel from "react-bootstrap/Carousel"

import style from "./maincarousel.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

const MainCarousel = ({ data }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={style.carousel}
      >
        {data.allFile.edges.map(edge => {
          return (
            <Carousel.Item>
              <Img
                className={style.carousel_img}
                fluid={edge.node.childImageSharp.fluid}
                alt="Carousel item"
              />
              <Carousel.Caption>
                <h3>Entrenudo</h3>
                <p>Una manera diferente de regalar flores</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "flowers" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default function MyMainCarousel() {
  return (
    <StaticQuery query={query} render={data => <MainCarousel data={data} />} />
  )
}
