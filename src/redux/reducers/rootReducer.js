import { combineReducers } from 'redux'
import filters from 'src/redux/reducers/filter'
import filterData from 'src/redux/reducers/filterData'
// import practices from 'src/redux/reducers/practices'

export default combineReducers({
  filterData,
  filters
  // practices
})
