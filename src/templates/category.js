// import React from 'react'
// import { graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'
// import get from 'lodash/get'
// import Img from 'gatsby-image'
// import Layout from '../components/layout'

// class CategoryTemplate extends React.Component {
//   render() {
//     const category = get(this.props, 'data.contentfulCategory')
//     const siteTitle = get(this.props, 'data.site.siteMetadata.title')

//     return (
//       <Layout location={this.props.location}>
//         <div style={{ background: '#fff' }}>
//           <Helmet title={`${category.title} | ${siteTitle}`} />
//           <div className={heroStyles.hero}>
//             <Img
//               className={heroStyles.heroImage}
//               alt={category.title}
//               fluid={category.heroImage.fluid}
//             />
//           </div>
//           <div className="wrapper">
//             <h1 className="section-headline">{category.title}</h1>
//             <p
//               style={{
//                 display: 'block',
//               }}
//             >
//               {category.publishDate}
//             </p>
//             <div
//               dangerouslySetInnerHTML={{
//                 __html: category.body.childMarkdownRemark.html,
//               }}
//             />
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

// export default CategoryTemplate

// // export const pageQuery = graphql`
// //   query CategoriesBySlug($slug: String!) {
// //     site {
// //       siteMetadata {
// //         title
// //       }
// //     }
// //     contentfulCategory(slug: { eq: $slug }) {
// //       name
// //       icon {
// //         fluid(maxWidth: 120, background: "rgb:000000") {
// //           ...GatsbyContentfulFluid_withWebp
// //         }
// //       }
// //       description {
// //         childMarkdownRemark {
// //           html
// //         }
// //       }
// //     }
// //   }
// // `
