import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ category }) => (
  <div className="preview">
    <Img alt={`${category.name}-icon`} fixed={category.icon.fixed} />
    <h3 className="previewTitle">
      <Link to={`/${category.slug}`}>{category.name}</Link>
    </h3>
    <small></small>
    <div
      dangerouslySetInnerHTML={{
        __html: category.description.childMarkdownRemark.excerpt,
      }}
    />
  </div>
)
