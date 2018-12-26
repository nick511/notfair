import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'

import ErrorBoundary from 'components/Utils/ErrorBoundary'
import CarListItem from 'components/CarList/CarListItem'
import styles from './CarList.module.scss'

class CarList extends PureComponent {
  render() {
    const { cars, hasMore, fetchCars, favoriteCarAction } = this.props

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
          {cars.allIds.map((id, idx) => (
            <ErrorBoundary key={id + idx}>
              <CarListItem
                car={cars.byId[id]}
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
  cars: PropTypes.shape({
    allIds: PropTypes.array.isRequired,
    byId: PropTypes.object.isRequired,
  }),
  hasMore: PropTypes.bool.isRequired,
  fetchCars: PropTypes.func.isRequired,
  favoriteCarAction: PropTypes.func.isRequired,
}

export default CarList
