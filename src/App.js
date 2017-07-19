import React, { Component } from 'react'
// Redux
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'
// Router
import { Route, Router, hashHistory } from 'react-router'
// child components
import LandingPage from './components/LandingPage'
import SearchPage from './components/SearchPage'
import Listing from './components/Listing'
import About from './components/About'
import Header from 'src/components/Header'
// global styling
import 'normalize.css'
import './app.less'

const store = configureStore()

class App extends Component {

  render() {

    return(
      <div className='app-wrap'>
        <Header
          header={'Dentto'}
          subHeader={"Discover your perfect Dentist"}
        />
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route path='/' component={LandingPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/about" component={About} />
            <Route path="/listing/:practiceId" component={Listing} />
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App
