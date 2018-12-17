import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './CarListItem.module.scss'

class CarListItem extends PureComponent {
  _favoriteCar = e => {
    e.preventDefault()
    const { favoriteCarAction, car } = this.props
    favoriteCarAction(car.id, !car.isFavorite)
  }

  render() {
    const { car } = this.props
    const payment = car.product_financials[0]

    // mock data: not in API
    const minPrice = 12680
    const listPrice = 17999
    const fairMax = 17750
    const realPrice = 16999
    const fairMaxPercent = ((fairMax - minPrice) / (listPrice - minPrice)) * 100
    const realPricePercent =
      ((realPrice - minPrice) / (listPrice - minPrice)) * 100

    return (
      <Link to={`/vehicles/${car.id}`} className={styles.component}>
        <div className={styles.image}>
          <img src={car.chrome_image_url} alt="" />
          <div
            className={cn(styles.favorite, 'favorite', {
              favorited: car.isFavorite,
            })}
            onClick={this._favoriteCar}
          >
            <i className="fa fa-heart" />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.name}>
            {car.model_year} {car.make} {car.model}
          </div>
          <div className={styles.vin}>VIN: {car.id}</div>
          <div className={styles.infoItem}>TRIM: {car.trim}</div>
          <div className={styles.infoItem}>MILES: {car.mileage}</div>
          <div className={styles.infoItem}>
            Monthly Fee: ${payment.monthly_payment_cents / 100}
          </div>
          <div className={styles.infoItem}>
            Start Fee: ${payment.start_fee_cents / 100}
          </div>
        </div>

        <div className={styles.info2}>
          <div className={styles.priceChart}>
            <div className={styles.minPrice}>
              <div className={styles.label}>Min Price</div>
              <div className={styles.price}>${minPrice.toLocaleString()}</div>
            </div>

            <div className={styles.priceBar}>
              <div className={styles.barBox}>
                <div className={styles.bar}>
                  <div
                    className={styles.colorBar}
                    style={{ width: `${fairMaxPercent}%` }}
                  />
                </div>
                <div
                  className={styles.realPrice}
                  style={{ left: `${realPricePercent}%` }}
                >
                  <div className={styles.price}>
                    ${realPrice.toLocaleString()}
                  </div>
                  <div className={styles.line} />
                  <div className={styles.roundButton} />
                </div>
                <div
                  className={styles.fairMax}
                  style={{ left: `${fairMaxPercent}%` }}
                >
                  <div className={styles.line} />
                  <div className={styles.offset}>
                    <div className={styles.label}>Fair Program Max</div>
                    <div className={styles.price}>
                      ${fairMax.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.listPrice}>
              <div className={styles.label}>List Price</div>
              <div className={styles.price}>${listPrice.toLocaleString()}</div>
            </div>
          </div>
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
