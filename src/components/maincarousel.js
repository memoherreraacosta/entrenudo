import React, { useState } from "react"
import Img from "gatsby-image"

import Carousel from 'react-bootstrap/Carousel'

import style from './maincarousel.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const MainCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

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
      }
    ]
  
    return (
      <>
      <Carousel activeIndex={index} onSelect={handleSelect} className={style.carousel} >
      {
          imageContent.map(el =>{
            return (
              <Carousel.Item >
                <img
                  className={style.carousel_img}
                  src={el.src}
                  alt="Carousel item"
                />
                <Carousel.Caption>
                  <h3>Entrenudo</h3>
                  <p>Una manera diferente de regalar flores</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
      </>
    );
  }
  
export default MainCarousel;
