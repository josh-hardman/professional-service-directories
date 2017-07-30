import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import SearchPage from 'src/components/searchPage/SearchPage'

const SearchPageGQLContainer = (props) => (
  <SearchPage {...props}/>
)

export default graphql(gql`
  query {
    allCities {
      name,
      id
    },
    allInsurances {
      name,
      id
    },
    allVisitReasons {
      name,
      id
    }
  }
`,
{ name: "filterData" }
)(SearchPageGQLContainer)
