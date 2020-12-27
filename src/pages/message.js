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
        image="/logos/logo_verde.jpeg"
        pathname="/:id"
      />
      <>
        <Canvas />
      </>
    </Layout>
  )
}

export default MessagePage
