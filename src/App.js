import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { IndexRoute, Route, Router } from 'react-router'

import { createStore } from 'redux'
import todoApp from './redux/reducers'

// import store from './redux/configureStore'

//child components
import Header from './components/Header'
import Landing from './components/Landing'
import Listing from './components/Listing'
import Search from './components/Search'

import 'normalize.css'
import './app.less'

const store = createStore(
 todoApp,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

  state = {
    booking: {}
  }

  render() {
    return(
      <Provider store={store}>
        <h1>hello</h1>
        {/* <Router history={this.props.history}>
          <Route path='/' component={Landing}>
            <Route
              path="/search"
              component={Search}
            />
            <Route
              path="/listing/:practiceId"
              component={Listing}
            />
          </Route>
        </Router> */}
      </Provider>
    )
  }
}

export default App
