import React, {Component} from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
//child components
import Landing from './components/Landing'
import Search from './components/Search'
import Listing from './components/Listing'

export default class App extends Component {

  render() {

    return (
      <HashRouter>
        <Switch>
          <Route path="/landing" component={Landing} />
          <Route path="/search" component={Search} />
          <Route path="/listing" component={Listing} />
        </Switch>
      </HashRouter>
    )
  }
}
