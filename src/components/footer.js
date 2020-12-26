import React from "react"

import style from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className={style.colophon}>
    <>
      Síguenos en Instagram{" "}
      <a href="https://www.instagram.com/entrenudo/">@{siteTitle}</a>
    </>
  </footer>
)

export default Footer
