import { combineReducers } from 'redux'
import filters from 'src/redux/reducers/filters'
import practices from 'src/redux/reducers/practices'

export default combineReducers({
  filters,
  practices
})
