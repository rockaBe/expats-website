import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Category from '../components/category'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')
    const categories = get(this, 'props.data.allContentfulCategory.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h3 className="section-headline">{siteDescription}</h3>
            <ul className="category-list">
              {categories.map(({ node }) => {
                return (
                  <li className="category-item" key={node.slug}>
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
              excerpt(pruneLength: 85)
            }
          }
          slug
          icon {
            fixed(width: 120, height: 120) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`
