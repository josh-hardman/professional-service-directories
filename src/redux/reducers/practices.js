import * as ActionTypes from 'src/redux/actionTypes'

const initialState = {
  fetching: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.DATA:
      return {
        ...state,
        stuff: true,
        data: action.data
      }
    default:
      return state
  }
}
