import produce from 'immer'
import typeToReducer from 'type-to-reducer'

import * as carsActions from '../actions/carsActions'

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

const handleFetchCarListAction = {
  PENDING: (state, action) => ({
    ...state,
    fetching: true,
    fetched: false,
    failed: false,
  }),
  REJECTED: (state, action) => ({
    ...state,
    fetching: false,
    fetched: false,
    failed: true,
    hasMore: false,
  }),
  FULFILLED: (state, action) => {
    const allIds = state.cars.allIds
    const byId = state.cars.byId
    const page = action.meta.page

    action.payload.data.vehicles.forEach(vehicle => {
      // Check if favorited
      vehicle.isFavorite = localStorage.getItem(vehicle.id) === 'true'

      // Add car
      allIds.push(vehicle.id)
      byId[vehicle.id] = vehicle
    })

    state.fetching = state.failed = false
    state.fetched = true
    state.hasMore = page < 10 // Fake total page here since API always return page 1
    return state
  },
}

const handleFavoriteCarAction = {
  FULFILLED: (state, action) => {
    const { vin, isFavorite } = action.payload
    const car = state.cars.byId[vin]

    if (!car) {
      return state
    }

    car.isFavorite = isFavorite
    return state
  },
}

// Use immer here, just mutate the state ;)
const carListReducer = produce(
  typeToReducer(
    {
      [carsActions.FETCH_CAR_LIST]: handleFetchCarListAction,
      [carsActions.FAVORITE_CAR]: handleFavoriteCarAction,
    },
    initialState,
  ),
)

export default carListReducer
