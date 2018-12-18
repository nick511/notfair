import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'state/actions/carsActions'
import ErrorBoundary from 'components/Utils/ErrorBoundary'
import CarGallary from 'components/Car/CarGallary'
import CarDetail from 'components/Car/CarDetail'
import NotFound from 'components/NotFound/NotFound'
import styles from './CarDetailPage.module.scss'

export class CarDetailPage extends PureComponent {
  componentDidMount = () => {
    this.props.actions.fetchCar(this.props.match.params.vin)
  }

  render() {
    const { data: car, failed } = this.props.car
    const actions = this.props.actions

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

const mapStateToProps = state => {
  return { car: state.car }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarDetailPage)
