import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './category.module.css'

export default ({ category }) => (
  <div className={styles.preview}>
    <Img alt={`${category.name}-icon`} fixed={category.icon.fixed} />
    <h3 className={styles.previewTitle}>
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
