import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'state/actions/carsActions'
import ErrorBoundary from 'components/Utils/ErrorBoundary'
import CarList from 'components/CarList/CarList'
import './home.scss'

class Home extends PureComponent {
  render() {
    const { carList, cars, hasMore, actions } = this.props
    return (
      <div className="home">
        <ErrorBoundary>
          <CarList
            carList={carList}
            cars={cars}
            hasMore={hasMore}
            fetchCars={actions.fetchCars}
            favoriteCarAction={actions.favoriteCar}
          />
        </ErrorBoundary>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    carList: state.carList.carIdList,
    cars: state.carList.cars,
    hasMore: state.carList.hasMore,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
