import { combineReducers } from 'redux'
import filterValues from 'src/redux/reducers/filterValues'
import filterOptions from 'src/redux/reducers/filterOptions'
import results from 'src/redux/reducers/results'
import practice from 'src/redux/reducers/practice'

export default combineReducers({
  filterOptions,
  filterValues,
  results,
  practice
})
