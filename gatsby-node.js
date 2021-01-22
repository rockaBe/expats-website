const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('./src/templates/category.js')
    const serviceTemplate = path.resolve('./src/templates/service.js')
    resolve(
      graphql(
        `{
          categories: allContentfulCategory {
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
                  duration
                  minPrice
                }
                icon {
                  file {
                    url
                  }
                }
              }
            }
          }
          services: allContentfulService {
            edges {
              node {
                name
                slug
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                category {
                  name
                  slug
                }
                duration
                minPrice
                service_provider {
                  name
                  biography {
                    childMarkdownRemark {
                      html
                    }
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
        console.log('result', result);
        result.data.categories.edges.forEach((category, index) => {
          console.dir(category)
          createPage({
            path: `/${category.node.slug}/`,
            component: categoryTemplate,
            context: {
              slug: category.node.slug
            },
          })
        });

        result.data.services.edges.forEach((service, index) => {
          console.dir(service)
          createPage({
            path:`/${service.node.category.slug}/${service.node.slug}`,
            component: serviceTemplate,
            context: {
              slug: service.node.slug
            },
          })
        })
      })
    )
  })
}
