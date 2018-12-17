import * as actions from '../actions/carsActions'
import { _PENDING, _FULFILLED, _REJECTED } from 'utils/constants'

const initialState = {
  cars: {},
  fetching: false,
  fetched: false,
  failed: false,
}

const carListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_CAR_LIST + _PENDING:
      return {
        ...state,
        fetching: true,
        fetched: false,
        failed: false,
      }

    case actions.FETCH_CAR_LIST + _REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        failed: true,
      }

    case actions.FETCH_CAR_LIST + _FULFILLED:
      const cars = action.payload.data.vehicles.reduce((cars, vehicle) => {
        vehicle.isFavorite = localStorage.getItem(vehicle.id) === 'true'
        console.log('vehicle.isFavorite: ', vehicle.isFavorite)
        cars[vehicle.id] = vehicle
        return cars
      }, {})

      return {
        ...state,
        cars,
        fetching: false,
        fetched: true,
        failed: false,
      }

    case actions.FAVORITE_CAR + _FULFILLED:
      const { vin, isFavorite } = action.payload
      const car = state.cars[vin]

      if (!car) {
        return state
      }

      return {
        ...state,
        cars: { ...state.cars, [vin]: { ...car, isFavorite } },
      }

    default:
      return state
  }
}

export default carListReducer
