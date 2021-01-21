import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class CategoryTemplate extends React.Component {
  render() {
    const category = get(this.props, 'data.contentfulCategory')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${category.name} | ${siteTitle}`} />
          <div className="wrapper">
            <div className="hero">
              <Img
                className="test"
                alt={category.name}
                fixed={category.icon.fixed}
              />
            </div>
            <h1 className="section-headline">{category.name}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: category.description.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoriesBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCategory(slug: { eq: $slug }) {
      name
      icon {
        fixed(width: 120, height: 120, background: "rgb:000000") {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      service {
        name
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
