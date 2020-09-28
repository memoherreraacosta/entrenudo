import React,  { useState } from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Banner from "./banner";
import style from "./selector.module.css";


class PaletaSelector extends React.Component {
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
        }, () =>{
            localStorage.setItem("paleta", paleta);
            localStorage.setItem("paletaId", index);
        })
    }

    setBgCard = (index) =>{
        return index === this.state.selectedPaleta ? "success" : "light"
    }

    setColorCard = (index) =>{
        return index === this.state.selectedPaleta ? "white" : "dark"
    }

    componentDidMount(){
        const id_str = localStorage.getItem("paletaId");
        const id = id_str ? parseInt(id_str) : -1;
        this.setState({
            selectedPaleta: id
        })
    }



    render() {
        return (
        <div className={style.cards} >
            <Banner texto="Escoge tu Paleta" />
            <CardColumns>
                {   this.state.catalogData.map( (el, index) =>{
                    return (
                        <Card key={el.title} className="text-center" bg={this.setBgCard(index)} text={this.setColorCard(index)} onClick={ () => this.addToCart(el.title, index)}>
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
  
export default PaletaSelector;
