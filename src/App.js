import React, { Component } from 'react'
// redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'src/redux/reducers/rootReducer'
import thunk from 'redux-thunk'
// router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// child components
import Header from 'src/components/common/Header'
import LandingPage from './components/LandingPage'
import SearchPage from './components/SearchPage'
import ListingPageContainer from 'src/containers/ListingPageContainer'
// import SearchPageContainerOptions from './containers/SearchPageFilterOptions'
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
            <Route path='/search' component={SearchPage}/>
            <Route path='/listing/:id' component={ListingPageContainer}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
