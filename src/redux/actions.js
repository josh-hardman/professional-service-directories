/*
 * action types
 */

export const UPDATE_FILTER = 'UPDATE_FILTER'

/*
 * action creators
 */

export function updateFilter(filter) {
  return {
    type: UPDATE_FILTER,
    filter
  }
}
