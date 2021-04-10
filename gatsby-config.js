require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");
const {
  title,
  ogTitle,
  twitterTitle,
  description,
  ogDescription,
  twitterDescription,
  image,
  url,
  keywords,
  author,
  defaultLang,
  trackingId,
  facebookAppId,
} = require("./config/site");

module.exports = {
  siteMetadata: {
    title,
    ogTitle,
    twitterTitle,
    description,
    ogDescription,
    twitterDescription,
    image,
    url,
    author,
    keywords,
    facebookAppId,
  },
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          // 複数指定可
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
            mapping: { Photo: `fileNode` }, // optional
            separateNodeType: false,
            separateMapType: false,
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "Agency",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#fed136",
        display: "minimal-ui",
        icon: "content/assets/over40.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    },

    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          data: `@import "core.scss";`,
          includePaths: [path.resolve(__dirname, "src/style")],
        },
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Droid Sans",
            file: "https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap",
          },
          {
            name: "Montserrat",
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
          },
          {
            name: "Kaushan Script",
            file: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
          },
          {
            name: "Roboto Slab",
            file: "https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/content/"],
      },
    },
  ],
};
