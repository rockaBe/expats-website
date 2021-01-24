import React from 'react'
import { Link } from 'gatsby'

export default ({ service }) => (
  <div className="preview">
    <h3 className="previewTitle">
      <Link to={`/${service.slug}`}>{service.name}</Link>
    </h3>
    <small></small>
    <div
      dangerouslySetInnerHTML={{
        __html: service.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
