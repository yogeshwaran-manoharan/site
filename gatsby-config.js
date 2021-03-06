module.exports = {
    siteMetadata: {
        title: `Campaignrabbit`,
        description: `Sell more by sending targetted, data-driven marketing emails to your customers`,
        author: `Shobana`,
        siteUrl: `https://www.campaignrabbit.com/`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/content`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            }
        },
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 590,
                },
              },
              {
                resolve: `gatsby-remark-responsive-iframe`,
                options: {
                  wrapperStyle: `margin-bottom: 1.0725rem`,
                },
              },
              `gatsby-remark-prismjs`,
              `gatsby-remark-copy-linked-files`,
              `gatsby-remark-smartypants`,
              `gatsby-remark-component`
            ],
          },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Quattrocento+Sans\:400,400i,700,700i`,
                    `Cabin\:400,500,600,700`,
                    `Hind\:300,400,500,600,700`
                ]
            }
        },
        // {
        //     resolve: `gatsby-plugin-typography`,
        //     options: {
        //         pathToConfigModule: `${__dirname}/src/utils/typography.js`,
        //     },
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `campaignrabbit`,
                short_name: `campaignrabbit`,
                start_url: `/`,
                background_color: `#6772e5`,
                theme_color: `#6772e5`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-118283837-1",
            }
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: '178691189734042',
            }
        },
        {
            resolve: `gatsby-plugin-intercom`,
            options: {
                appId: 'buyqnr2q',
            }
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                id: 1062564,
                sv: 6
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
}
