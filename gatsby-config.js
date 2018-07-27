const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'UNILAMP Prototype',
  },
  pathPrefix: "/unilamp-prototype",
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8, // SASS default: 5
      },
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { 
        prefixes: ['/product/*', '/category/*'] 
      },
    },
  ],
};
