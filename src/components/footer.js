import React from "react"
import style from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className={style.colophon}>
    <a href="https://www.instagram.com/entrenudo/" style={{marginRight: 100 + 'px'}}>© {new Date().getFullYear()}  {siteTitle}</a>
  </footer>
)

export default Footer
