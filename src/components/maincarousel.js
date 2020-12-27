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

  const imagesContainer = data.allFile.nodes

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={style.carousel}
      >
        {imagesContainer.map(el => {
          return (
            <Carousel.Item>
              <Img
                className={style.carousel_img}
                fluid={el.src}
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
    allFile(filter: { sourceInstanceName: { eq: "flowers" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
        relativePath
      }
    }
  }
`

export default function MyMainCarousel() {
  return (
    <StaticQuery query={query} render={data => <MainCarousel data={data} />} />
  )
}

/*
const imageContent = [
    {
      src: "images/flowers/flowers_1.jpg",
    },
    {
      src: "images/flowers/flowers_2.jpg",
    },
    {
      src: "images/flowers/flowers_3.jpg",
    },
    {
      src: "images/flowers/flowers_4.jpg",
    },
    {
      src: "images/flowers/flowers_5.jpg",
    },
    {
      src: "images/flowers/flowers_6.jpg",
    },
    {
      src: "images/flowers/flowers_7.jpg",
    },
    {
      src: "images/flowers/flowers_8.jpg",
    },
    {
      src: "images/flowers/flowers_9.jpg",
    },
  ]
*/
