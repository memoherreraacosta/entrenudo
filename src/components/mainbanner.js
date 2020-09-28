import React from "react";
import style from './mainbanner.module.css'
import Button from 'react-bootstrap/Button'

const MainBanner = () => {
    return (
        <div className={style.hero_image}>
            <div className={style.hero_text}>
                <h1>Personaliza y regala flores diferente</h1>
                <p>Tus colores favoritos, tu presupuesto y tu manera de expresar el mansaje.</p>
                <Button variant="success" onClick={() => {window.location.href = "/catalog"}}>Ordenar ahora</Button>
            </div>
        </div>
    );
  }
  
export default MainBanner;
