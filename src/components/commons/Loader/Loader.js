import React from 'react'

import styles from './Loader.module.scss'

function Loader({ style = {} }) {
  return (
    <div className={styles.module} style={style}>
      <div className={styles.loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
