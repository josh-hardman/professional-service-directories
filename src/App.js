import React, {Component} from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
//child components
import Landing from './components/Landing'
import Search from './components/Search'
import Listing from './components/Listing'

export default class App extends Component {

  render() {

    return (
      <div>
        <h1>Header</h1>
        <Router>
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
        </Router>
        <h1>Footer</h1>
      </div>
    )
  }
}
