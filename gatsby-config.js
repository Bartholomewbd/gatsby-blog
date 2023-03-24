/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Brew.Codes`,
    description: `Blog for coding tutorials, posts and more.`,
    siteUrl: `https://brew.codes/`,
    home: {
      title: `Welcome to Brew.Codes`,
      description: `A home for all coding tutorials, posts and more. `,
    },
  },
  plugins: [{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "G-JEGV8XHYKX",
      head: false,
      
    }
  },{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/_data`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `img`,
      path: `${__dirname}/src/img/`
    }
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [{
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: false,
          noInlineHighlight: false,
        },
      },
      {
        resolve: 'gatsby-remark-emojis',
      },
      {
        resolve: 'gatsby-remark-emoji', // <-- this adds emoji
        options: {
          // default emojiConversion --> shortnameToUnicode
          emojiConversion: 'shortnameToUnicode',
          // when true, matches ASCII characters (in unicodeToImage and shortnameToImage)
          // e.g. ;) --> 😉
          ascii: false,
        }
      },
      ],
    },
  },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode'
  ],
}
