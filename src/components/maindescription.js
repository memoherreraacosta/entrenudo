import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import style from "./maindescription.module.css"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"

const MainDescription = ({ data }) => {
  return (
    <>
      <div className={style.title}>¿Qué nos hace diferentes?</div>
      <>
        <CardDeck>
          <Card>
            <Img variant="top" fluid={data.walletImg.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title className={style.card_title}>
                Personalización
              </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Img variant="top" fluid={data.boxImg.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title className={style.card_title}>
                Detalles que cuentan
              </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Img variant="top" fluid={data.cardImg.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title className={style.card_title}>
                Exprésalo diferente
              </Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </>
      <div className={style.media_banner}>
        Síguenos <a href="https://www.instagram.com/entrenudo/">@entrenudo</a>
      </div>
    </>
  )
}

const query = graphql`
  query {
    walletImg: file(relativePath: { eq: "description/wallet.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boxImg: file(relativePath: { eq: "description/box.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cardImg: file(relativePath: { eq: "description/card.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function MyMainDescription(props) {
  return (
    <StaticQuery
      query={query}
      render={data => <MainDescription data={data} />}
    />
  )
}
