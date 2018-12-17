import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CarListItem from 'components/CarList/CarListItem'

class CarList extends PureComponent {
  render() {
    const { cars, favoriteCarAction } = this.props
    return (
      <div>
        {Object.keys(cars).map(key => (
          <CarListItem
            key={key}
            car={cars[key]}
            favoriteCarAction={favoriteCarAction}
          />
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
