import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//child components
import Header from './components/Header'
import Landing from './components/Landing'
import Listing from './components/Listing'
import Search from './components/Search'

import 'normalize.css'
import './app.less'

export default class App extends Component {
  getChildContext() {
    return {color: 'purple'}
  }

  static childContextTypes = {
    color: PropTypes.string
  }

  render() {
    return (
      <Router>
          <div>
            <Header />
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
            <h1>Footer</h1>
          </div>
      </Router>
    )
  }
}
