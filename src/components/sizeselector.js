import React from "react"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import Banner from "./banner"
import style from "./selector.module.css"

class SizeSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSize: -1,
      catalogData: [
        // These images are fetched from the 'public' directory
        // the images (not paths) that are fetched from GraphQL
        // comes from the 'content/images' directory
        {
          title: "Chico",
          src: "images/catalog/size_small.jpg",
          text: "12 - 15 tallos de flor \n $10",
        },
        {
          title: "Mediano",
          src: "images/catalog/size_medium.jpg",
          text: "18 - 22 tallos de flor \n $20",
        },
        {
          title: "Grande",
          src: "images/catalog/size_large.jpg",
          text: "25 - 30 tallos de flor \n $30",
        },
      ],
    }
  }

  addToCart = (size, index) => {
    this.setState(
      {
        selectedSize: index,
      },
      () => {
        localStorage.setItem("size", size)
        localStorage.setItem("sizeId", index)
      }
    )
  }

  setBgCard = index => {
    return index === this.state.selectedSize ? "success" : "light"
  }

  setColorCard = index => {
    return index === this.state.selectedSize ? "white" : "dark"
  }

  componentDidMount() {
    const id_str = localStorage.getItem("sizeId")
    const id = id_str ? parseInt(id_str) : -1
    this.setState({
      selectedSize: id,
    })
  }

  render() {
    return (
      <div className={style.cards}>
        <Banner texto="Escoge el tamaño" />
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

export default SizeSelector
