import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EntrenudoImage from "../components/entrenudoimage"


const IndexPage = () => {
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
          <EntrenudoImage
            src="../static/images/demo_image.jpeg"
            alt=""
          />
      </>
    </Layout>
  )
}

export default IndexPage