import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//child components
import Header from './components/Header'
import Landing from './components/Landing'
import Listing from './components/Listing'
import Search from './components/Search'

import 'normalize.css'
import './app.less'

class App extends Component {

  render() {
    return(
      <Router>
          <div className='app-wrapper'>
            <Header
              header='Dentto'
              subHeader='Discover your perfect dentist.'
            />
            <Switch>
              <Route
                exact={true}
                path="/"
                component={Landing}
              />
              <Route
                path="/search"
                component={Search}
              />
              <Route
                path="/listing/:practiceId"
                component={Listing}
              />
            </Switch>
            {/* <h1>Footer</h1> */}
          </div>
      </Router>
    )
  }
}

export default App
