import React from "react"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import Banner from "./banner"
import style from "./selector.module.css"

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedStyle: -1,
      catalogData: [
        // These images are fetched from the 'public' directory
        // the images (not paths) that are fetched from GraphQL
        // comes from the 'content/images' directory
        {
          title: "Estándar",
          src: "images/catalog/size_small.jpg",
          text: "Flores de gama esándar \n + $15",
        },
        {
          title: "Deluxe",
          src: "images/catalog/size_medium.jpg",
          text: "Flores de alta gama \n + $25",
        },
      ],
    }
  }

  addToCart = (style, index) => {
    this.setState(
      {
        selectedStyle: index,
      },
      () => {
        localStorage.setItem("style", style)
        localStorage.setItem("styleId", index)
      }
    )
  }

  setBgCard = index => {
    return index === this.state.selectedStyle ? "success" : "light"
  }

  setColorCard = index => {
    return index === this.state.selectedStyle ? "white" : "dark"
  }

  componentDidMount() {
    const id_str = localStorage.getItem("styleId")
    const id = id_str ? parseInt(id_str) : -1
    this.setState({
      selectedStyle: id,
    })
  }

  render() {
    return (
      <div className={style.cards}>
        <Banner texto="Escoge el estilo" />
        <CardColumns>
          {this.state.catalogData.map((el, index) => {
            return (
              <Card
                key={el.title}
                className="text-center"
                bg={this.setBgCard(index)}
                text={this.setColorCard(index)}
                onClick={() => this.addToCart(el.title, index)}
              >
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Img variant="top" src={el.src} />
                </Card.Body>
                <Card.Text>{el.text}</Card.Text>
              </Card>
            )
          })}
        </CardColumns>
        <p>{this.state.texto}</p>
      </div>
    )
  }
}

export default StyleSelector
