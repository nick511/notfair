import React from 'react'
import PropTypes from 'prop-types'

import styles from './PriceChart.module.scss'

function PriceChart({ realPrice, minPrice, listPrice, fairMaxPrice }) {
  const fairMaxPercent =
    ((fairMaxPrice - minPrice) / (listPrice - minPrice)) * 100
  const realPricePercent =
    ((realPrice - minPrice) / (listPrice - minPrice)) * 100

  return (
    <div className={styles.component}>
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
            <div className={styles.price}>${realPrice.toLocaleString()}</div>
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
                ${fairMaxPrice.toLocaleString()}
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
  )
}

PriceChart.propTypes = {
  realPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired,
  listPrice: PropTypes.number.isRequired,
  fairMaxPrice: PropTypes.number.isRequired,
}

export default PriceChart
