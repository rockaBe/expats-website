const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('./src/templates/category.js')
    resolve(
      graphql(
        `{
          allContentfulCategory {
            edges {
              node {
                name
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                slug
                service {
                  name
                  description {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
                icon {
                  file {
                    url
                  }
                }
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const categories = result.data.allContentfulCategory.edges
        categories.forEach((category, index) => {
          console.dir(category)
          createPage({
            path: `/category/${category.node.slug}/`,
            component: categoryTemplate,
            context: {
              slug: category.node.slug
            },
          })
        })
      })
    )
  })
}
