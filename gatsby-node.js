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
  }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allGoogleSheetSiteDatesRow {
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
    
    result.data.allGoogleSheetSiteDatesRow.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/state-page.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}