import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ErrorBoundary from 'components/Utils/ErrorBoundary'
import CarListItem from 'components/CarList/CarListItem'
import styles from './CarList.module.scss'

class CarList extends PureComponent {
  render() {
    const { cars, favoriteCarAction } = this.props
    return (
      <div className={styles.component}>
        {Object.keys(cars).map(key => (
          <ErrorBoundary key={key}>
            <CarListItem
              car={cars[key]}
              favoriteCarAction={favoriteCarAction}
            />
          </ErrorBoundary>
        ))}
      </div>
    )
  }
}

CarList.propTypes = {
  cars: PropTypes.object.isRequired,
  favoriteCarAction: PropTypes.func.isRequired,
}

export default CarList
