import { combineReducers } from 'redux'
import filterValues from 'src/redux/reducers/filterValues'
import filterOptions from 'src/redux/reducers/filterOptions'

export default combineReducers({
  filterValues,
  filterOptions
})
