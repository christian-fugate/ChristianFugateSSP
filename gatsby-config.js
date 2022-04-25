module.exports = {
  pathPrefix: "/ChristianFugateSSP",
  siteMetadata: {
    title: "Pokedex",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
  ]
};