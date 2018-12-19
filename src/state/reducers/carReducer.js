import * as actions from '../actions/carsActions'
import { _PENDING, _FULFILLED, _REJECTED } from 'utils/constants'

export const initialState = {
  data: null,
  fetching: false,
  fetched: false,
  failed: false,
}

const carReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.FETCH_CAR + _PENDING:
      return {
        ...state,
        data: null,
        fetching: true,
        fetched: false,
        failed: false,
      }

    case actions.FETCH_CAR + _REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        failed: true,
      }

    case actions.FETCH_CAR + _FULFILLED:
      const vehicle = action.payload.data.vehicle
      vehicle.isFavorite = localStorage.getItem(vehicle.id) === 'true'

      return {
        ...state,
        data: vehicle,
        fetching: false,
        fetched: true,
        failed: false,
      }

    case actions.FAVORITE_CAR + _FULFILLED:
      const { vin, isFavorite } = action.payload

      // Don't update if not the same vin
      if (!(state.data && vin === state.data.id)) {
        return state
      }

      return {
        ...state,
        data: { ...state.data, isFavorite },
      }

    default:
      return state
  }
}

export default carReducer
