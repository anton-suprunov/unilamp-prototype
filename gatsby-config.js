const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'UNILAMP Prototype',
  },
  //pathPrefix: "/"
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8, // SASS default: 5
      },
    },
  ],
};
