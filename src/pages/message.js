
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Canvas from "../components/canvas"

const MessagePage = () => {
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
        <Canvas />
      </>
    </Layout>
  )
}


export default MessagePage
