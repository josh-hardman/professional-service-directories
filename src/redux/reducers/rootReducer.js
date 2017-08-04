import { combineReducers } from 'redux'
import filterValues from 'src/redux/reducers/filterValues'
import filterOptions from 'src/redux/reducers/filterOptions'
import results from 'src/redux/reducers/results'

export default combineReducers({
  filterOptions,
  filterValues,
  results
})
