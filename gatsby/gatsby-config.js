/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "7jhacyva",
                dataset: "links",
                token: process.env.SANITY_TOKEN,
                watchMode: !!process.env.SANITY_WATCH_MODE,
                overlayDrafts: !!process.env.SANITY_OVERLAY_DRAFTS,
            },
        },
    ],
}
