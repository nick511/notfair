import React, { PureComponent } from 'react'

import styles from './header.module.scss'

class Header extends PureComponent {
  render() {
    return (
      <nav className={styles.component}>
        <div className="navbar-brand">
          <div className={styles.title}>NotFair</div>
        </div>
      </nav>
    )
  }
}

export default Header
