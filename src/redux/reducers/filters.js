import * as ActionTypes from 'src/redux/actionTypes'

export default (state={}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_FILTER:
      return {
        ...state,
        [action.filterKey]: action.value
      }
    case ActionTypes.RECEIVE_FILTER_DATA:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}
