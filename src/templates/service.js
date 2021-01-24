import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class ServiceTemplate extends React.Component {
  render() {
    const service = get(this.props, 'data.contentfulService')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${service.name} | ${siteTitle}`} />
          <div className="wrapper">
            <h1 className="section-headline">{service.name}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: service.description.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className="serviceProviderPreviewList">
            <ul>
              {service.service_provider &&
                service.service_provider.map(serviceProvider => (
                  <li className="tag" key={serviceProvider.name}>
                    <div>
                      <h2>{serviceProvider.name}</h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: serviceProvider.biography.childMarkdownRemark.html,
                        }}
                      />
                    </div>

                  </li>
                ))}

            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ServiceTemplate

export const pageQuery = graphql`
  query ServicesBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulService(slug: { eq: $slug }) {
      name
      description {
        childMarkdownRemark {
          html
        }
      }
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
`
