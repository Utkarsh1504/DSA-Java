module.exports = {
  siteMetadata: {
    title: "Data Structures & Algorithms",
    subtitle: "Using Java",
    courseImage: "algorithms.png", // this also should go in /static
    twitter: "https://twitter.com/umishra1504", // make empty string to omit socials
    linkedin: "https://www.linkedin.com/in/umishra-1504",
    github: "https://github.com/utkarsh1504",
    description:
      "Learn all the data-structures and algorithm using the language Java",
    keywords: ["java", "markdown", "algorithms", "data-structures"],
  },
  pathPrefix: "/DSA-Java", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
