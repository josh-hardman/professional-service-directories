import { createStore, applyMiddleware } from 'redux'
import filters from 'src/redux/reducers'
// import rootReducer from './rootRecucer'
import thunk from 'redux-thunk'

const configureStore = () => (
  createStore(
   filters,
   applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default configureStore
