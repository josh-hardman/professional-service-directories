import * as ActionTypes from 'src/redux/actionTypes'
import fetch from 'isomorphic-fetch'

const api = 'https://api.graph.cool/simple/v1/cj590hy2dfdtl0105kwjxsfpv'

const query = `
  {
    allDentists {
      name
    }
  }
`

const getData = data => ({
  type: ActionTypes.DATA,
  data
})

export const fetchPractices = () => {
  return dispatch => {
   return fetch(api, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0OTk3ODgzOTMsImNsaWVudElkIjoiY2o0enJhOHdvdHpzOTAxOTZqdDRwY2Z6aiJ9.bWqznea85Wrzp8t0vMzTB3nTB1EW4ji2FSfmFdq_4sY'
      },
      body: JSON.stringify({query}),
    })
      .then(
       response => response.json()
      )
      .then(data => {
          dispatch(getData(data))
          console.log()
    }).catch(error => { throw error })
  }
}
