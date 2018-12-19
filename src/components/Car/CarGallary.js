import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import ReactImageFallback from 'react-image-fallback'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'style/slick-overwrite.scss'
import styles from './CarGallary.module.scss'

class CarGallary extends PureComponent {
  state = {
    activeSlide: 1,
  }

  _beforeChange = (current, next) => {
    this.setState({ activeSlide: next + 1 })
  }

  render() {
    return (
      <div>
        <Slider beforeChange={this._beforeChange}>
          {this.props.images.map(image => (
            <div key={image}>
              <ReactImageFallback
                src={image}
                fallbackImage="/images/car-image-placeholder.png"
                alt=""
                className={styles.mainImage}
              />
            </div>
          ))}
        </Slider>

        {/* Image page info */}
        <div className={styles.pageInfo}>
          {this.state.activeSlide} / {this.props.images.length}
        </div>
      </div>
    )
  }
}

CarGallary.propTypes = {
  images: PropTypes.array.isRequired,
}

export default CarGallary
