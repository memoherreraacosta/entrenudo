import React from "react";
import { Link } from "gatsby"
import style from './maindescription.module.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const MainDescription = () => {
    return (
        <div>
            <div className = {style.title}>
                Lo que nos diferencia
            </div>
            <div>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="images/wallet.jpg" />
                        <Card.Body>
                        <Card.Title className={style.card_title}>Personalización</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/box.jpg"  />
                        <Card.Body>
                        <Card.Title className={style.card_title}>Detalles que cuentan</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/card.jpg" />
                        <Card.Body>
                        <Card.Title className={style.card_title}>Exprésalo diferente</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <div className = {style.media_banner}>
                Síguenos en Instagram <Link to="https://www.instagram.com/entrenudo/">@entrenudo</Link>
            </div>
        </div>
    );
  }
  
export default MainDescription;