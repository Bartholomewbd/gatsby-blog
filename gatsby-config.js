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
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it. replace with yours
      trackingId: "UA-164743872-1",
      head: true,
    }
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-JEGV8XHYKX", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
  },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode'
  ],
}
