import * as actions from '../actions/carsActions'
import { _PENDING, _FULFILLED, _REJECTED } from 'utils/constants'

const initialState = {
  carIdList: [],
  cars: {},
  fetching: false,
  fetched: false,
  failed: false,
  hasMore: true,
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
        hasMore: false,
      }

    case actions.FETCH_CAR_LIST + _FULFILLED:
      const cars = { ...state.cars }
      const carIdList = [...state.carIdList]
      const page = action.meta.page

      action.payload.data.vehicles.forEach(vehicle => {
        vehicle.isFavorite = localStorage.getItem(vehicle.id) === 'true'
        cars[vehicle.id] = vehicle
        carIdList.push(vehicle.id)
      })

      return {
        ...state,
        carIdList,
        cars,
        fetching: false,
        fetched: true,
        failed: false,
        hasMore: page < 10, // Fake total page here since API always return page 1
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
