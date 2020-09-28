import React,  { useState } from "react";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

const CatalogContent = () => {
    const [texto, setTexto] = useState(0);

    const catalogData = [
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
    ];

    const addToCart = (paleta) =>{
        console.log("Producto añadido al carrito")
        console.log(paleta)
        fetch('http://localhost:8080/api/order')
        .then(response => response.json())
        .then(data => {
            setTexto(JSON.stringify(data));
        });
        localStorage.setItem("paleta", paleta);
    }
    
    return (
        <div>
            <CardColumns>
                {   catalogData.map( el =>{
                    return (
                        <Card key={el.title} className="text-center" onClick={ () => addToCart(el.title)}>
                            <Card.Body >
                                <Card.Title >{el.title}</Card.Title>
                                <Card.Img variant="top" src={el.src} />
                                <Card.Text>{el.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    )})

                }
            </CardColumns>
            <p>{texto}</p>
        </div>

    );
  }
  
export default CatalogContent;
