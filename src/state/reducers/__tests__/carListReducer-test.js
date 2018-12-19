import * as actions from 'state/actions/carsActions'
import { _PENDING, _FULFILLED, _REJECTED } from 'utils/constants'
import carListReducer, { initialState } from '../carListReducer'

describe('carListReducer', () => {
  const car = {
    id: '19XFC2F59GE2276732016',
    isFavorite: false,
  }
  const stateWithCar = {
    ...initialState,
    carIdList: [car.id],
    cars: { [car.id]: car },
  }
  let state = null

  beforeEach(() => {
    state = carListReducer()
  })

  it('returns initialState by default', () => {
    expect(state).toEqual(initialState)
  })

  it('returns FETCH_CAR_LIST pending state', () => {
    const action = {
      type: actions.FETCH_CAR_LIST + _PENDING,
    }

    state = carListReducer(state, action)
    expect(state.fetching).toEqual(true)
  })

  it('returns FETCH_CAR_LIST rejected state', () => {
    const action = {
      type: actions.FETCH_CAR_LIST + _REJECTED,
    }

    state = carListReducer(state, action)
    expect(state.failed).toEqual(true)
  })

  it('returns car list with isFavorite flag by FETCH_CAR_LIST action', () => {
    // mock localStorage value first
    localStorage.setItem(car.id, 'true')

    const action = {
      type: actions.FETCH_CAR_LIST + _FULFILLED,
      payload: {
        data: {
          vehicles: [car],
        },
      },
      meta: {
        page: 1,
      },
    }

    state = carListReducer(state, action)

    // check car list size
    expect(state.carIdList.length).toEqual(1)
    // check if car exist
    expect(state.cars[car.id]).toBeDefined()
    // check if isFavorite changed
    expect(state.cars[car.id].isFavorite).toEqual(true)
  })

  it('changes isFavorite state of car by FAVORITE_CAR action', () => {
    const action = {
      type: actions.FAVORITE_CAR + _FULFILLED,
      payload: {
        vin: car.id,
        isFavorite: true,
      },
    }

    const newState = carListReducer(stateWithCar, action)
    expect(newState.cars[car.id].isFavorite).toEqual(true)
  })

  it('should return original state if the vin in FAVORITE_CAR action is invalid', () => {
    const action = {
      type: actions.FAVORITE_CAR + _FULFILLED,
      payload: {
        vin: car.id + 'invalid-vin',
        isFavorite: true,
      },
    }

    expect(carListReducer(stateWithCar, action)).toEqual(stateWithCar)
  })
})
