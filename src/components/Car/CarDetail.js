import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './CarDetail.module.scss'

export class CarDetail extends Component {
  _favoriteCar = () => {
    const { favoriteCarAction, car } = this.props
    favoriteCarAction(car.id, !car.isFavorite)
  }

  render() {
    const { car } = this.props
    const payment = car.product_financials[0]

    return (
      <div className={styles.component}>
        {/* Favorite icon */}
        <div
          className={cn(styles.favorite, 'favorite', {
            favorited: car.isFavorite,
          })}
          onClick={this._favoriteCar}
        >
          <i className="fa fa-heart" />
        </div>

        {/* Car make&model */}
        <div className={styles.make}>
          {car.model_year} {car.make}
        </div>
        <div className={styles.model}>
          {car.model} {car.trim}
        </div>

        {/* Mileage */}
        <div className={styles.mileage}>
          <span className="number">{car.mileage.toLocaleString()}</span> Mi.
        </div>

        {/* Payment info */}
        {payment && (
          <div className={styles.payment}>
            <div className={styles.monthyPayment}>
              <label>Monthy Pymt.</label>
              <div className={styles.price}>
                ${payment.monthly_payment_cents / 100}
              </div>
            </div>
            <div className={styles.startPayment}>
              <label>Start Pymt.</label>
              <div className={styles.price}>
                ${payment.start_fee_cents / 100}
              </div>
            </div>
          </div>
        )}

        {/* Color info */}
        <div className={styles.colorInfo}>
          <div className={styles.exterior}>
            <label>Exterior Color</label>
            <div className={styles.color}>Metallic</div>
          </div>
          <div className={styles.interior}>
            <label>Interior Color</label>
            <div className={styles.color}>Black</div>
          </div>
        </div>
      </div>
    )
  }
}

CarDetail.propTypes = {
  car: PropTypes.object.isRequired,
  favoriteCarAction: PropTypes.func.isRequired,
}

export default CarDetail
