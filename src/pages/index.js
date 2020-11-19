import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainCarousel from "../components/maincarousel"
import MainBanner from "../components/mainbanner";
import MainDescription from "../components/maindescription";
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Entrenudo"
        description="Entrenudo Estudio Floral"
        image="/logos/logo_verde.jpeg"
        pathname="/:id"
        // Boolean indicating whether this is an article:
        // article
      />
      <>
        <MainBanner />
        <MainDescription />
        <MainCarousel />
      </>
    </Layout>
  )
}

export default IndexPage