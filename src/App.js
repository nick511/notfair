import React, { Suspense, lazy } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import LogRocket from 'logrocket'

import './style/base.scss'
import './App.scss'
import store from './state/store'
import Header from './components/Header/Header'
import Loader from './components/commons/Loader/Loader'
import NotFound from './components/commons/NotFound/NotFound'
import { LOG_ROCKET_ID } from 'utils/constants'

// Log service
LogRocket.init(LOG_ROCKET_ID)

// Routes
const Home = lazy(() => import('containers/Home/Home'))
const CarDetailPage = lazy(() =>
  import('containers/CarDetailPage/CarDetailPage'),
)

// There's a failed prop type warning, just ignore it now.
// Fixed in next version(react-router-dom@4.4.0)
export const Routes = () => (
  <Suspense fallback={<Loader style={{ height: '200px' }} />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vehicles/:vin" component={CarDetailPage} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
)

// PageLayout
const PageLayout = props => (
  <div className="App">
    <Header />
    <main className="container">{props.children}</main>
  </div>
)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PageLayout>
        <Routes />
      </PageLayout>
    </BrowserRouter>
  </Provider>
)

export default App
