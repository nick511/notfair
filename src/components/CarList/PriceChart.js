import React from 'react'
import PropTypes from 'prop-types'

import styles from './PriceChart.module.scss'

function PriceChart({ realPrice, minPrice, listPrice, fairMaxPrice }) {
  const getPricePercentage = price => {
    let pcercent = ((price - minPrice) / (listPrice - minPrice)) * 100
    return Math.min(Math.max(parseInt(pcercent), 0), 100) // limit number between 0-100
  }

  const formatCurrency = number => '$' + parseInt(number, 10).toLocaleString()

  const realPricePercent = getPricePercentage(realPrice)
  const fairMaxPercent = getPricePercentage(fairMaxPrice)

  return (
    <div className={styles.component}>
      <div className={styles.minPrice}>
        <div className={styles.label}>Min Price</div>
        <div className={styles.price}>{formatCurrency(minPrice)}</div>
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
            <div className={styles.price}>{formatCurrency(realPrice)}</div>
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
              <div className={styles.price}>{formatCurrency(fairMaxPrice)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.listPrice}>
        <div className={styles.label}>List Price</div>
        <div className={styles.price}>{formatCurrency(listPrice)}</div>
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
