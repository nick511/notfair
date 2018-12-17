import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './CarDetailPage.module.scss'
import * as actions from 'state/actions/carsActions'
import CarGallary from 'components/Car/CarGallary'
import CarDetail from 'components/Car/CarDetail'
import NotFound from 'components/NotFound/NotFound'

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
        <CarGallary images={car.image_location_list} />
        <CarDetail car={car} favoriteCarAction={actions.favoriteCar} />
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
