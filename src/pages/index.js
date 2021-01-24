import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Category from '../components/category'
class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteMotivationTitle = get(this, 'props.data.site.siteMetadata.motivation.title')
    const siteMotivationDescription = get(this, 'props.data.site.siteMetadata.motivation.description')
    const categories = get(this, 'props.data.allContentfulCategory.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div className="relative py-3 sm:max-w-5xl sm:mx-auto mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white sm:rounded-3xl sm:p-8 mr-8 ml-8">
              <div className="mx-auto">
                <div className="w-40 rounded-full bg-blue-500 uppercase font-bold px-2 py-1 text-sm mr-3 mb-3 text-center text-white">{siteMotivationTitle}</div>
                <h3 className="">{siteMotivationDescription}</h3>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
              {categories.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <Category category={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        motivation {
          title
          description
        }
        description
      }
    }
    allContentfulCategory {
      edges {
        node {
          name
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 110)
            }
          }
          slug
          icon {
            fixed(width: 80, height: 80) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`
