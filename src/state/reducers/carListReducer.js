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
  },
}

const handleFavoriteCarAction = {
  FULFILLED: (state, action) => {
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
  },
}

const carListReducer = typeToReducer(
  {
    [carsActions.FETCH_CAR_LIST]: handleFetchCarListAction,
    [carsActions.FAVORITE_CAR]: handleFavoriteCarAction,
  },
  initialState,
)

export default carListReducer
