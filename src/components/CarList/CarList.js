import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'

import ErrorBoundary from 'components/Utils/ErrorBoundary'
import CarListItem from 'components/CarList/CarListItem'
import styles from './CarList.module.scss'

class CarList extends PureComponent {
  render() {
    const { carList, cars, hasMore, fetchCars, favoriteCarAction } = this.props

    return (
      <div className={styles.component}>
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchCars}
          hasMore={hasMore}
          loader={
            <div className="loader" key="0">
              Loading ...
            </div>
          }
        >
          {carList.map((id, idx) => (
            <ErrorBoundary key={id + idx}>
              <CarListItem
                car={cars[id]}
                favoriteCarAction={favoriteCarAction}
              />
            </ErrorBoundary>
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}

CarList.propTypes = {
  carList: PropTypes.array.isRequired,
  cars: PropTypes.object.isRequired,
  hasMore: PropTypes.bool.isRequired,
  fetchCars: PropTypes.func.isRequired,
  favoriteCarAction: PropTypes.func.isRequired,
}

export default CarList
