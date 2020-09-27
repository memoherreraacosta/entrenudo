import React from "react"
import CatalogContent from "../components/catalogcontent"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CatalogPage = () => {
    return (
        <Layout>
            <h1>Cátalogo</h1>
            <CatalogContent />
        
        </Layout>
    )
  }
  
  export default CatalogPage;