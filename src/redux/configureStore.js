import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'src/redux/reducers/rootReducer'
// import rootReducer from './rootRecucer'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

const configureStore = () => (
  createStore(
   rootReducer,
   compose( middleware, window.devToolsExtension ? window.devToolsExtension() : f => f )
  )
)

export default configureStore
