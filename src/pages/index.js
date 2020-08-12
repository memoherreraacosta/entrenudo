import React from "react"

export default function Home() {
  return (
    <div>
      <head>
        <title>Entrenudo</title>
        <link
          rel="icon"
          href="https://entrenudo-bucket.s3.amazonaws.com/entrenudo_fondo_blanco.jpeg"
        />
      </head>
      <body>
        <div class="imgbox">
          <img
            src="https://entrenudo-bucket.s3.amazonaws.com/entrenudo_fondo_verde.jpeg"
            alt="Entrenudo Estudio Floral"
            class="center-fit"
          />
        </div>
      </body>
    </div>
  )
}

/*
 <style>
      * {
        margin: 0;
        padding: 0;
      }
      .imgbox {
        display: grid;
        height: 100%;
      }
      .center-fit {
        max-width: 100%;
        max-height: 100vh;
        margin: auto;
      }
    </style>
*/