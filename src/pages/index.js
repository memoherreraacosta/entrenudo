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
    </Layout>
  )
}


export default IndexPage