import React from "react"
import PaletaSelector from "../components/paletaselector"
import SizeSelector from "../components/sizeselector"
import StyleSelector from "../components/styleselector"

import Layout from "../components/layout"
import style from "./catalog.module.css"

const CatalogPage = () => {
    return (
        <Layout>
            <div className={style.title}>Cátalogo</div>
            <PaletaSelector />
            <SizeSelector />
            <StyleSelector />
        
        </Layout>
    )
  }
  
  export default CatalogPage;