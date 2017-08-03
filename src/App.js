import React, { Component } from 'react'
import Header from 'src/components/common/Header'
// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'src/redux/reducers/rootReducer'
import thunk from 'redux-thunk'
// router
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
// child components
import LandingPage from './components/landingPage'
import SearchPageContainerOptions from './containers/SearchPageFilterOptions'
// styling
import 'normalize.css'
import './app.less'

const configureStore = () => {
  const middleware = applyMiddleware(thunk)

  return createStore(
    rootReducer,
    compose( middleware, window.devToolsExtension ? window.devToolsExtension() : f => f )
  )
}

class App extends Component {
  render() {

    return(
      <Provider store={configureStore()}>
          <Router>
            <div>
              <Header
                header={'Dentto'}
                subHeader={'Discover your perfect Dentist.'}
              />
              <Route exact path='/' component={LandingPage}/>
              <Route path='/search' component={SearchPageContainerOptions}/>
            </div>
          </Router>
      </Provider>
    )
  }
}

export default App
