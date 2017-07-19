import * as ActionTypes from 'src/redux/actionTypes'

const initialState = {
  fetching: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRACTICES:
      return {
        ...state,
        fetching: true
      }
    default:
      return state
  }
}
