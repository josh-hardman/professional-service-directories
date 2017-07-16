import React, { Component } from 'react'
// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import filters from './redux/reducers'
// Router
import { Route, Router, hashHistory } from 'react-router'
// child components
import Header from './components/Header'
import Landing from './components/Landing'
import Listing from './components/Listing'
import Search from './components/Search'
// global styling
import 'normalize.css'
import './app.less'

const store = createStore(
 filters,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {

    return(
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Landing} />
          <Route path="/search" component={Search} />
          <Route path="/listing/:practiceId" component={Listing} />
        </Router>
      </Provider>
    )
  }
}

export default App
