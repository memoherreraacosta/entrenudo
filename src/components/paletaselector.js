import React,  { useState } from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Banner from "./banner";


class CatalogContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPaleta: -1,
        catalogData: [
            {
                title: "Summer rise",
                src: "images/catalog/summer_rise_1.jpg"
            },
            {
                title: "Warm hug",
                src: "images/catalog/warm_hug_1.jpg"
            },
            {
                title: "Serenity",
                src: "images/catalog/serenity_1.jpg"
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
            <Banner texto="Escoge tu Paleta" />
            <CardColumns>
                {   this.state.catalogData.map( (el, index) =>{
                    return (
                        <Card key={el.title} className="text-center" bg={this.setBgPaleta(index)} text={this.setColorPaleta(index)} onClick={ () => this.addToCart(el.title, index)}>
                            <Card.Body >
                                <Card.Title >{el.title}</Card.Title>
                                <Card.Img variant="top" src={el.src} />
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
