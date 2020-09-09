const { slugifyState } = require('./src/lib/common');
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `googleSheetSiteDatesRow`) {
        var slug = slugifyState(node.state);
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
    else if (node.internal.type === `googleSheetVaApiDataRow`) {
        createNodeField({
            node,
            name: `slug`,
            value: node.stateSlug,
        })
    }
    else if (node.internal.type === `googleSheetEarlyVotingDataRow`) {
        createNodeField({
            node,
            name: `slug`,
            value: node.stateSlug,
        })
    }
  }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allGoogleSheetEarlyVotingDataRow {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.allGoogleSheetEarlyVotingDataRow.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/state-page.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}
