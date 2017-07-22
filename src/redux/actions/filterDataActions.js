import * as ActionTypes from 'src/redux/actionTypes'

const api = 'https://api.graph.cool/simple/v1/cj590hy2dfdtl0105kwjxsfpv'

const getGraphQLData = data => ({
  type: ActionTypes.RECEIVE_FILTER_DATA,
  data: data.data
})

// fetch filter data
export const fetchCities = () => {
  return dispatch => {
    return fetch(api, {
       method: 'post',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTk3ODgzOTMsImNsaWVudElkIjoiY2o0enJhOHdvdHpzOTAxOTZqdDRwY2Z6aiJ9.bWqznea85Wrzp8t0vMzTB3nTB1EW4ji2FSfmFdq_4sY'
       },
       body: JSON.stringify({
         query: `
            query {
                allCities {
                  id,
                  name
                }
            }
          `
       })
     })
       .then(
         response => response.json()
       )
       .then(data => {
         dispatch(getGraphQLData(data))
     }).catch(error => { throw error })
  }
}

export const fetchInsurances = () => {
  return dispatch => {
    return fetch(api, {
       method: 'post',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTk3ODgzOTMsImNsaWVudElkIjoiY2o0enJhOHdvdHpzOTAxOTZqdDRwY2Z6aiJ9.bWqznea85Wrzp8t0vMzTB3nTB1EW4ji2FSfmFdq_4sY'
       },
       body: JSON.stringify({
         query: `
            query {
                allInsurances {
                  id,
                  name
                }
            }
          `
       })
     })
       .then(
         response => response.json()
       )
       .then(data => {
         dispatch(getGraphQLData(data))
     }).catch(error => { throw error })
  }
}

export const fetchVisitReasons = () => {
  return dispatch => {
    return fetch(api, {
       method: 'post',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTk3ODgzOTMsImNsaWVudElkIjoiY2o0enJhOHdvdHpzOTAxOTZqdDRwY2Z6aiJ9.bWqznea85Wrzp8t0vMzTB3nTB1EW4ji2FSfmFdq_4sY'
       },
       body: JSON.stringify({
         query: `
            query {
                allVisitReasons {
                  id,
                  name
                }
            }
          `
       })
     })
       .then(
         response => response.json()
       )
       .then(data => {
         dispatch(getGraphQLData(data))
     }).catch(error => { throw error })
  }
}
