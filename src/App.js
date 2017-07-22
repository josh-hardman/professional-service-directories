import React, { Component } from 'react'
// apollo
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
// redux
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import filters from 'src/redux/reducers/filter'
import thunk from 'redux-thunk'
// router
import { Route, Router, hashHistory } from 'react-router'
// child components
import LandingPage from './components/LandingPage'
import SearchPage from './components/SearchPage'
import About from './components/About'
import Header from 'src/components/Header'
// styling
import 'normalize.css'
import './app.less'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj590hy2dfdtl0105kwjxsfpv'
  })
})

const configureStore = () => {
  const middleware = applyMiddleware(thunk, client.middleware())

  return createStore(
    combineReducers({
      filters,
      apollo: client.reducer()
    }),
   compose( middleware, window.devToolsExtension ? window.devToolsExtension() : f => f )
  )
}

class App extends Component {
  render() {

    return(
      <div className='app-wrap'>
        <Header
          header={'Dentto'}
          subHeader={"Discover your perfect Dentist"}
        />
        <Provider store={configureStore()}>
          <ApolloProvider client={client}>
            <Router history={hashHistory}>
              <Route path='/' component={LandingPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/about" component={About} />
            </Router>
          </ApolloProvider>
        </Provider>
      </div>
    )
  }
}

export default App
