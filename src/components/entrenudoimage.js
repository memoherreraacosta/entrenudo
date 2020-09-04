import React from "react"
import style from "./entrenudoimage.module.css"

const EntrenudoImage = ({ src, alt }) => {
  return (
    <div className={ style.imgbox }>
      <img
        src={src}
        alt={alt}
        className={ style.centerfit }
      />
    </div>
  )
}

export default EntrenudoImage
