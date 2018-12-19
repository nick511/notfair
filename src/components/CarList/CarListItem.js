import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import PriceChart from './PriceChart'
import styles from './CarListItem.module.scss'

class CarListItem extends PureComponent {
  _favoriteCar = e => {
    e.preventDefault()
    const { favoriteCarAction, car } = this.props
    favoriteCarAction(car.id, !car.isFavorite)
  }

  render() {
    const { car } = this.props

    const payment = Array.isArray(car.product_financials)
      ? car.product_financials[0]
      : null

    return (
      <Link to={`/vehicles/${car.id}`} className={styles.component}>
        {/* Car image */}
        <div className={styles.image}>
          <img src={car.chrome_image_url} alt="" />
        </div>

        {/* Car info */}
        <div className={styles.info}>
          <div className={styles.name}>
            {car.model_year} {car.make} {car.model}
          </div>

          {payment && (
            <div>
              <span className={styles.price}>
                ${payment.monthly_payment_cents / 100}
              </span>
              per mo.
            </div>
          )}

          <div className={styles.infoItem}>TRIM: {car.trim}</div>
          <div className={styles.infoItem}>MILES: {car.mileage}</div>

          {payment && (
            <div className={styles.infoItem}>
              Start Fee: ${payment.start_fee_cents / 100}
            </div>
          )}

          {/* Favorite button */}
          <div
            className={cn(styles.favorite, 'favorite', {
              favorited: car.isFavorite,
            })}
            onClick={this._favoriteCar}
          >
            <i className="fa fa-heart" />
          </div>
        </div>

        <div className={styles.priceChart}>
          <PriceChart
            realPrice={16999}
            minPrice={12680}
            listPrice={17999}
            fairMaxPrice={17750}
          />
        </div>
      </Link>
    )
  }
}

CarListItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
  favoriteCarAction: PropTypes.func.isRequired,
}

export default CarListItem
