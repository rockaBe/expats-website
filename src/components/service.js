import React from 'react'
import { Link } from 'gatsby'

import styles from './service.module.css'

export default ({ service }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
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
