// import { combineReducers } from 'redux'
import {
  UPDATE_FILTER
} from './actions'

const filters = (state=[], action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return [
        ...state,
        {
          filter: action.filter
        }
      ]
    default:
      return state
  }
}

// const denttoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

export default filters
