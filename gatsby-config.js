const dotenv = require("dotenv")
const config = require("./src/config")

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lindsay Bloom",
        short_name: "LindsayBloom",
        start_url: "/",
        background_color: "black",
        theme_color: "gray",
        display: "minimal-ui",
        icon: "assets/LB_LOGO.png",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "sdgc3wpiox9z",
        accessToken: "VygsV8cfARSa5qilfeNy8ciVhCmx2Cp4R5PP0vMNWrc", //process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
}
