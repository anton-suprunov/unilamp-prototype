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
        prefixes: ['/product/*'] 
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keylNnhWyJwtJp88R`,
        //baseId: `apply6kNJW5MM1eZ1`,
        baseId: `appFtV9T1TrOaFvMl`,
        tableName: `Imported table 0.2 -on SKU`,
        tableView: `Descriptions - Product Page`,
        queryName: ``
      }
    },
    /* {
      resolve: `gatsby-source-airtable-linked`,
      options: {
        apiKey: `keylNnhWyJwtJp88R`, // may instead specify via env, see below
        tables: [{
            baseId: `appFtV9T1TrOaFvMl`,
            tableName: `Imported table 0.2 -on SKU`,
            tableView: `Descriptions - Product Page`,
            //queryName: ``, // optional
            mapping: {
              'COLUMN NAME AS SEEN IN AIRTABLE': `VALUE_FORMAT`
            } // optional
            tableLinks: [`ARRAY_OF_STRINGS_REPRESENTING_COLUMN_NAMES`] //optional
          }
        ]
      }
    }, */
  ],
};
