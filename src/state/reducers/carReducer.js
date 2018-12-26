import typeToReducer from 'type-to-reducer'

import * as carActions from '../actions/carsActions'

export const initialState = {
  data: null,
  fetching: false,
  fetched: false,
  failed: false,
}

const handleFetchCarAction = {
  PENDING: (state, action) => ({
    ...state,
    data: null,
    fetching: true,
    fetched: false,
    failed: false,
  }),
  REJECTED: (state, action) => ({
    ...state,
    fetching: false,
    fetched: false,
    failed: true,
  }),
  FULFILLED: (state, action) => {
    const vehicle = action.payload.data.vehicle
    vehicle.isFavorite = localStorage.getItem(vehicle.id) === 'true'

    return {
      ...state,
      data: vehicle,
      fetching: false,
      fetched: true,
      failed: false,
    }
  },
}

const handleFavoriteCarAction = {
  FULFILLED: (state, action) => {
    const { vin, isFavorite } = action.payload

    // Don't update if can't find the car
    if (!(state.data && vin === state.data.id)) {
      return state
    }

    return {
      ...state,
      data: { ...state.data, isFavorite },
    }
  },
}

const carReducer = typeToReducer(
  {
    [carActions.FETCH_CAR]: handleFetchCarAction,
    [carActions.FAVORITE_CAR]: handleFavoriteCarAction,
  },
  initialState,
)

export default carReducer
