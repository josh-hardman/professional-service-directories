import * as ActionTypes from 'src/redux/actionTypes'

export default (state={}, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_RESULTS:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}
