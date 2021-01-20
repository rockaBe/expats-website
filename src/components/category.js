import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ category }) => (
  <div className={styles.preview}>
    <Img alt="" fixed={category.icon.fixed} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${category.slug}`}>{category.name}</Link>
    </h3>
    <small></small>
    <div
      dangerouslySetInnerHTML={{
        __html: category.description.childMarkdownRemark.html,
      }}
    />
    {category.service &&
      category.service.map(serv => (
        <p className={styles.tag} key={serv.name}>
          {serv.name}
        </p>
      ))}
  </div>
)
