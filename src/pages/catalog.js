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
    const size_price = {
      Chico: 10,
      Mediano: 20,
      Grande: 30,
    }

    const style_price = {
      Estándar: 15,
      Deluxe: 25,
    }

    const paleta = localStorage.getItem("paleta")
    const size = localStorage.getItem("size")
    const catalog_style = localStorage.getItem("style")
    paleta && size && catalog_style
      ? alert(
          "La cotizacion del producto es de: " +
            (Number(size_price[size]) + Number(style_price[catalog_style]))
        )
      : alert("Selección incompleta")

    localStorage.clear()
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
        <div className={style.title}>Catálogo</div>
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
