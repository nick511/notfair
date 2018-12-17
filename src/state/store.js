import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import promiseMiddleware from 'redux-promise-middleware'
import errorMiddleware from './middleware/errorMiddleware'

import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(errorMiddleware, promiseMiddleware())),
)

export default store
