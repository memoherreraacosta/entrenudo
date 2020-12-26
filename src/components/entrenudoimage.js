import React from "react"
import style from "./entrenudoimage.module.css"

import Img from "gatsby-image"

const EntrenudoImage = ({ src, alt }) => {
  return (
    <div className={ style.imgbox }>
      <Img
        src={src}
        alt={alt}
        className={ style.centerfit }
      />
    </div>
  )
}

export default EntrenudoImage