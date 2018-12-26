import * as actions from '../actions/carsActions'
import { _PENDING, _FULFILLED, _REJECTED } from 'utils/constants'

export const initialState = {
  cars: {
    allIds: [],
    byId: {},
  },
  fetching: false,
  fetched: false,
  failed: false,
  hasMore: true,
}

const carListReducer = (state = initialState, action = {}) => {
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
      const allIds = [...state.cars.allIds]
      const byId = { ...state.cars.byId }
      const page = action.meta.page

      action.payload.data.vehicles.forEach(vehicle => {
        // Check if favorited
        vehicle.isFavorite = localStorage.getItem(vehicle.id) === 'true'
        byId[vehicle.id] = vehicle
        allIds.push(vehicle.id)
      })

      return {
        ...state,
        cars: { allIds, byId },
        fetching: false,
        fetched: true,
        failed: false,
        hasMore: page < 10, // Fake total page here since API always return page 1
      }

    case actions.FAVORITE_CAR + _FULFILLED:
      const { vin, isFavorite } = action.payload
      const car = state.cars.byId[vin]

      if (!car) {
        return state
      }

      return {
        ...state,
        cars: {
          ...state.cars,
          byId: {
            ...state.cars.byId,
            [vin]: { ...car, isFavorite },
          },
        },
      }

    default:
      return state
  }
}

export default carListReducer
