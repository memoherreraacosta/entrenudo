import React from "react"
import style from "./banner.module.css"

const Banner = props => {
  return <div className={style.media_banner}>{props.texto}</div>
}

export default Banner
