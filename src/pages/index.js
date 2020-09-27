import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"
import MainCarousel from "../components/maincarousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainBanner from "../components/mainbanner";
import MainDescription from "../components/maindescription";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Entrenudo"
        description="Entrenudo Estudio Floral"
        image="/logo_verde.jpeg"
        pathname="/:id"
        // Boolean indicating whether this is an article:
        // article
      />
      <>
        <MainCarousel />
        <MainBanner />
        <MainCarousel />
      </>
    </Layout>
  )
}

export default IndexPage