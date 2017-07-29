import React, { Component } from 'react'
import Header from 'src/components/Header.js'
// apollo
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
// redux
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import filters from 'src/redux/reducers/filter'
import thunk from 'redux-thunk'
// router
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
// child components
import LandingPage from './components/LandingPage.js'
import SearchPage from './components/SearchPage.js'
import About from './components/About'
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
      <Provider store={configureStore()}>
        <ApolloProvider client={client}>
          <Router>
            <div>
              <Header
                header={'Dentto'}
                subHeader={'Discover your perfect Dentist.'}
              />
              <Route exact path='/' component={LandingPage}/>
              <Route path='/search' component={SearchPage}/>
              <Route path='/about' component={About}/>
            </div>
          </Router>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App
