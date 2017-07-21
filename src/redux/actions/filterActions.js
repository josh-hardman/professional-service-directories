import * as ActionTypes from 'src/redux/actionTypes'

export const updateFilter = (filter) => ({
  type: ActionTypes.UPDATE_FILTER,
  ...filter
})
