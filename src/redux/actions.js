import * as ActionTypes from 'src/redux/actionTypes'
/*
 * action creators
 */

export const updateFilter = (filter) => ({
  type: ActionTypes.UPDATE_FILTER,
  ...filter
})

export const fetchPractices = () => ({
  type: ActionTypes.FETCH_PRACTICES,
  payload: 'something'
})
