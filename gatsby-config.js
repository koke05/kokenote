module.exports = {
  siteMetadata: {
    title: `kokenote`,
    description: `学習したことをメモするブログ`,
    author: `kent kobayashi`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/pages/post`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}