import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './category.module.css'

export default ({ category }) => (
  <div className={styles.preview}>
    <div className={styles.icon}>
      <Img alt={`${category.name}-icon`} fixed={category.icon.fixed} />
    </div>
    <h3 className={styles.previewTitle}>
      <Link to={`/category/${category.slug}`}>{category.name}</Link>
    </h3>
    <small></small>
    <div
      dangerouslySetInnerHTML={{
        __html: category.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
