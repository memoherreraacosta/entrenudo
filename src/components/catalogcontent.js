import React from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

const CatalogContent = () => {
    const catalogData = [
        {
        title: "Título de las flores 1",
        src: "images/wallet.jpg",
        text: "Texto 1"
        },
        {
            title: "Título de las flores 2",
            src: "images/card.jpg",
            text: "Texto 2"
        },
        {
            title: "Título de las flores 3",
            src: "images/box.jpg",
            text: "Texto 3"
        },
        {
            title: "Título de las flores 4",
            src: "images/wallet.jpg",
            text: "Texto 4"
        },
        {
            title: "Título de las flores 5",
            src: "images/card.jpg",
            text: "Texto 5"
        },
        {
            title: "Título de las flores 6",
            src: "images/box.jpg",
            text: "Texto 6"
        }
    ];

    const addToCart = () =>{
        console.log("Producto añadido al carrito")
    }
    return (
        <CardColumns>
            {   catalogData.map( el =>{
                return (
                    <Card className="text-center" onClick={addToCart}>
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Img variant="top" src={el.src} />
                            <Card.Text>{el.text}</Card.Text>
                        </Card.Body>
                    </Card>
                )})

            }
        </CardColumns>
    );
  }
  
export default CatalogContent;
