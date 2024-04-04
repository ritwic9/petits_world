/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Petits World|Mangaluru`,
    titleTemplate: `%s`,
    headline: `Petits World - A place away from home, designed keeping in mind your child's safety and comfort!`,
    url: `https://www.petitsworld.com`,
    siteUrl: `https://www.petitsworld.com`,
    description: `Petits World - A place away from home, designed keeping in mind your child's safety and comfort!`,
    author: `@Bugbox Media`,
    defaultLanguage: "en",
    image: "/assets/icon.png",

    // Facebook Attributes
    facebook: "Petits World | Mangaluru",
    ogLanguage: "it_IT",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        /* Font loading mode */
        mode: "async",
        /* Enable font loading listener to handle FOUT */
        enableListener: true,
        /* Preconnect URL-s*/
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Athiti`,
            file: `https://fonts.googleapis.com/css2?family=Athiti:wght@400;500;600&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
};
