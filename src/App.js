import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './style/base.scss'
import './App.scss'
import store from './state/store'
import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import CarDetailPage from './containers/CarDetailPage/CarDetailPage'
import NotFound from './components/NotFound/NotFound'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/vehicles/:vin" component={CarDetailPage} />
    <Route component={NotFound} />
  </Switch>
)

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
