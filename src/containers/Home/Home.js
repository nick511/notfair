import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from 'state/actions/carsActions'
import ErrorBoundary from 'components/Utils/ErrorBoundary'
import CarList from 'components/CarList/CarList'
import './home.scss'

class Home extends PureComponent {
  componentDidMount = () => {
    this.props.actions.fetchCars()
  }

  render() {
    const { carList, actions } = this.props
    return (
      <div className="home">
        <ErrorBoundary>
          <CarList cars={carList} favoriteCarAction={actions.favoriteCar} />
        </ErrorBoundary>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { carList: state.carList.cars }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
