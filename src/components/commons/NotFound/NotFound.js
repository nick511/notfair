import React from 'react'
import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

function NotFound() {
  return (
    <div className={styles.component}>
      <p className={styles.title}>Looks like you went off the road.</p>
      <p className={styles.subtitle}>Page not found. Let’s take you home.</p>

      <Link to="/" className="button">
        Home
      </Link>
    </div>
  )
}

export default NotFound
