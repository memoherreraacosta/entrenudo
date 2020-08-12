import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Entrenudo"
        description="Entrenudo Estudio Floral"
        image="/logo.jpeg"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section>
        <h1>This is where the front page content will eventually go.</h1>
        <div><p>This file, index.js, functions as the homepage for the site.</p>
        <p>It can be populated with pure HTML like this, and extended using all available Gatsby and React components.</p></div>
      </section>
    </Layout>
  )
}


export default IndexPage

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