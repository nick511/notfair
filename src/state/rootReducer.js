import { combineReducers } from 'redux'

import carListReducer from './reducers/carListReducer'
import carReducer from './reducers/carReducer'

const rootReducer = combineReducers({
  carList: carListReducer,
  car: carReducer,
})

export default rootReducer
