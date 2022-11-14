/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://lovely-tanuki-74d8d1.netlify.app`,
    title: `SAAMA`,
    description: `YOUR NEW HOME IS COMING SOON`,
    twitterUsername: `@gatsbyjs`,
    image: `./src/assets/image.png`,
    author: `saama`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-transition-link", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};