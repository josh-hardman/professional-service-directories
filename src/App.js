import React, { Component } from 'react'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { Route, Router, hashHistory } from 'react-router'

import LandingPage from './components/LandingPage'
import SearchPage from './components/SearchPage'
// import Listing from './components/Listing'
import About from './components/About'
import Header from 'src/components/Header'

import 'normalize.css'
import './app.less'

const store = configureStore()

class App extends Component {

  createClient() {
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'https://api.graph.cool/simple/v1/cj590hy2dfdtl0105kwjxsfpv'
      })
    })
  }

  render() {

    return(
      <div className='app-wrap'>
        <Header
          header={'Dentto'}
          subHeader={"Discover your perfect Dentist"}
        />
        <Provider store={store}>
          <ApolloProvider client={this.createClient()}>
            <Router history={hashHistory}>
              <Route path='/' component={LandingPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/about" component={About} />
              {/* <Route path="/listing/:practiceId" component={Listing} /> */}
            </Router>
          </ApolloProvider>
        </Provider>
      </div>
    )
  }
}

export default App
