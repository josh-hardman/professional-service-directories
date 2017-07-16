/*
 * action types
 */

export const UPDATE_FILTER = 'UPDATE_FILTER'

/*
 * action creators
 */

export const updateFilter = (filter) => ({
  type: UPDATE_FILTER,
  ...filter
})
