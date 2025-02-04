/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Entrenudo`,
    titleTemplate: `%s`,
    author: {
      name: `Guillermo Herrera, Juan Quirino, Sergio Alvarado, Karol Gutierrez`,
      summary: `A client WebApp for Entrenudo company`,
    },
    description: `Estudio Floral`,
    url: `https://www.instagram.com/entrenudo/`,
    logo: `content/images/logos/logo.jpeg`,
    instagram: `https://www.instagram.com/entrenudo/`,
    menuLinks: [
      {
        name: `Inicio`,
        link: `/`,
      },
      {
        name: `Cotiza tu pedido`,
        link: `/catalog`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Entrenudo Estudio Floral`,
        short_name: `Entrenudo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `content/images/logos/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
