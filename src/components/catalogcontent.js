import React,  { useState } from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'


class CatalogContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPaleta: -1,
        step: 0,
        count: 0,
        texto: "hola mundo",
        catalogData: [
            {
                title: "Summer rise",
                src: "images/catalog/summer_rise_1.jpg",
                text: "Texto 1"
            },
            {
                title: "Warm hug",
                src: "images/catalog/warm_hug_1.jpg",
                text: "Texto 2"
            },
            {
                title: "Serenity",
                src: "images/catalog/serenity_1.jpg",
                text: "Texto 3"
            }
        ],

      };
    }
    
    addToCart = (paleta, index) =>{
        this.setState({
            selectedPaleta: index
        })
        localStorage.setItem("paleta", paleta);
    }

    setBgPaleta = (index) =>{
        console.log(this.state.selectedPaleta, index)
        return index === this.state.selectedPaleta ? "success" : ""
    }

    setColorPaleta = (index) =>{
        console.log(this.state.selectedPaleta, index)
        return index === this.state.selectedPaleta ? "white" : ""
    }



    render() {
        return (
        <div>
            <CardColumns>
                {   this.state.catalogData.map( (el, index) =>{
                    return (
                        <Card key={el.title} className="text-center" bg={this.setBgPaleta(index)} text={this.setColorPaleta(index)} onClick={ () => this.addToCart(el.title, index)}>
                            <Card.Body >
                                <Card.Title >{el.title}</Card.Title>
                                <Card.Img variant="top" src={el.src} />
                                <Card.Text>{el.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    )})

                }
            </CardColumns>
            <p>{this.state.texto}</p>
        </div>
        );
    }
  }
  
export default CatalogContent;
