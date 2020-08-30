const path = require(`path`)

const slugify = (stateName) => {
    return stateName.toLowerCase().replace(' ', '-')
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `googleSheetSiteDatesRow`) {
        var slug = 'src/pages/' + slugify(node.state);
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
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })
}