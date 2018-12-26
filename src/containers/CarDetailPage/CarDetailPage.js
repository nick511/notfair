import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'state/actions/carsActions'
import ErrorBoundary from 'components/Utils/ErrorBoundary'
import CarGallary from 'components/Car/CarGallary'
import CarDetail from 'components/Car/CarDetail'
import NotFound from 'components/commons/NotFound/NotFound'
import styles from './CarDetailPage.module.scss'

export class CarDetailPage extends PureComponent {
  componentDidMount = () => {
    this.props.actions.fetchCar(this.props.match.params.vin)
  }

  render() {
    const { car, failed } = this.props
    const actions = this.props.actions

    // fetchCar failed show not found page
    if (failed === true) return <NotFound />

    if (car == null) return null

    return (
      <div className={styles.component}>
        <ErrorBoundary>
          <CarGallary images={car.image_location_list} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CarDetail car={car} favoriteCarAction={actions.favoriteCar} />
        </ErrorBoundary>
      </div>
    )
  }
}

CarDetailPage.propTypes = {
  car: PropTypes.object,
  failed: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    fetchCar: PropTypes.func.isRequired,
    favoriteCar: PropTypes.func.isRequired,
  }).isRequired,
}

const mapStateToProps = state => {
  return { car: state.car.data, failed: state.car.failed }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarDetailPage)
