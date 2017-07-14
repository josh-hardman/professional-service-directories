import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//child components
import Header from './components/Header'
import Landing from './components/Landing'
import Listing from './components/Listing'
import Search from './components/Search'

import * as theme from './themes.js'

import 'normalize.css'
import './app.less'

const headerLinks = [
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

const App = () => (
  <Router>
      <div>
        <Header
          bgColor={theme.DENTTO_BASE_BLUE}
          header='Dentto'
          subHeader='Discover your perfect dentist.'
          links={headerLinks}
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
        <h1>Footer</h1>
      </div>
  </Router>
)

export default App
