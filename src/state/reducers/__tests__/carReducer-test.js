import * as actions from 'state/actions/carsActions'
import { _PENDING, _FULFILLED, _REJECTED } from 'utils/constants'
import carReducer, { initialState } from '../carReducer'

const car = {
  id: '19XFC2F59GE2276732016',
  isFavorite: false,
}
const stateWithCar = {
  ...initialState,
  data: car,
}
let state = null

describe('carReducer', () => {
  beforeEach(() => {
    state = carReducer()
  })

  it('returns initialState by default', () => {
    expect(state).toEqual(initialState)
  })

  it('returns FETCH_CAR pending state', () => {
    const action = {
      type: actions.FETCH_CAR + _PENDING,
    }

    state = carReducer(state, action)
    expect(state.fetching).toEqual(true)
  })

  it('returns FETCH_CAR rejected state', () => {
    const action = {
      type: actions.FETCH_CAR + _REJECTED,
    }

    state = carReducer(state, action)
    expect(state.failed).toEqual(true)
  })

  it('returns car list with isFavorite flag by FETCH_CAR action', () => {
    // mock localStorage value first
    localStorage.setItem(car.id, 'true')

    const action = {
      type: actions.FETCH_CAR + _FULFILLED,
      payload: {
        data: {
          vehicle: car,
        },
      },
    }

    state = carReducer(state, action)

    expect(state.data).toEqual({ ...car, isFavorite: true })
  })

  it('changes isFavorite state of car by FAVORITE_CAR action', () => {
    const action = {
      type: actions.FAVORITE_CAR + _FULFILLED,
      payload: {
        vin: car.id,
        isFavorite: true,
      },
    }

    const newState = carReducer(stateWithCar, action)
    expect(newState.data.isFavorite).toEqual(true)
  })

  it('should return original state if the vin in FAVORITE_CAR action is invalid', () => {
    const action = {
      type: actions.FAVORITE_CAR + _FULFILLED,
      payload: {
        vin: car.id + 'invalid-vin',
        isFavorite: true,
      },
    }

    expect(carReducer(stateWithCar, action)).toEqual(stateWithCar)
  })
})
