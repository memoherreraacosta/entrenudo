import React from "react"
import Button from "react-bootstrap/Button"
import PaletaSelector from "../components/paletaselector"
import SizeSelector from "../components/sizeselector"
import StyleSelector from "../components/styleselector"
import SEO from "../components/seo"
import Layout from "../components/layout"
import style from "./catalog.module.css"

const CatalogPage = () => {
  const checkValidSelection = () => {
    const paleta = localStorage.getItem("paleta")
    const size = localStorage.getItem("size")
    const style = localStorage.getItem("style")
    paleta && size && style
      ? (window.location.href = "/message")
      : alert("Selección incompleta")
  }
  return (
    <Layout>
      <SEO
        title="Entrenudo"
        description="Entrenudo Estudio Floral"
        image="/logo_verde.jpeg"
        pathname="/:id"
      />
      <>
        <div className={style.title}>Cátalogo</div>
        <PaletaSelector />
        <SizeSelector />
        <StyleSelector />
        <Button variant="success" size="lg" block onClick={checkValidSelection}>
          Aceptar selección
        </Button>
      </>
    </Layout>
  )
}

export default CatalogPage
