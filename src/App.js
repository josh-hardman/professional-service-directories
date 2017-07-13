import React, {Component} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//child components
import Header from './components/Header'
import Landing from './components/Landing'
import Listing from './components/Listing'
import Search from './components/Search'

import 'normalize.css'

export default class App extends Component {

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
