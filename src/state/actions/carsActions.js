import { ENDPOINT_VEHICLES, ENDPOINT_VEHICLE } from 'utils/constants'
import apiFetch from 'utils/apiFetch'

export const FETCH_CAR_LIST = 'FETCH_CAR_LIST'
export const FETCH_CAR = 'FETCH_CAR'
export const FAVORITE_CAR = 'FAVORITE_CAR'

export const fetchCars = (page = 1) => ({
  type: FETCH_CAR_LIST,
  payload: apiFetch(ENDPOINT_VEHICLES.replace(':page', page)),
  meta: { page },
})

export const fetchCar = (vin = '') => ({
  type: FETCH_CAR,
  payload: apiFetch(ENDPOINT_VEHICLE.replace(':vin', vin)),
})

export const favoriteCar = (vin = '', isFavorite = true) => ({
  type: FAVORITE_CAR,
  payload: new Promise((resolve, reject) => {
    // Using LocalStorage store favoriting data
    localStorage.setItem(vin, isFavorite)

    resolve({ vin, isFavorite })
  }),
})
