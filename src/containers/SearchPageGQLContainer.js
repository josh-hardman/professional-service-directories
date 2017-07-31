import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import SearchPage from 'src/components/searchPage/SearchPage'

const SearchPageGQLContainer = (props) => (
  <SearchPage {...props}/>
)

export default compose(
  graphql(
    gql`
      query {
        allCities {
          name,
          id
        },
        allPracticeTypes {
          name,
          id
        },
        allVisitReasons {
          name,
          id
        }
      }
    `,
    {
      name: "filterData"
    }
  ),
  graphql(gql`
    query( $insuranceValue: ID! )
    {
      allPractices
      (
        filter: {
          practiceType: {
            id: $insuranceValue
          }
        }
      )
      {
        name,
        id,
        contact {
          website
        }
        reviews {
          name,
          rating
        }
        file {
          url
        }
      }
    }
  `,
  {
    name: "practices"
  },
  {
    options: (props) => ({
      variables: {
        insuranceValue: props.insuranceValue
      }
    })
  })
)(SearchPageGQLContainer)
