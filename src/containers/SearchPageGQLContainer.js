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
    query(
      $practiceTypeValue: ID!,
      $cityValue: ID!
    )
    {
      allPractices
      (
        filter: {
          OR: [
            {
              city: {
                id: $cityValue
              }
            },
            {
              practiceType: {
                id: $practiceTypeValue
              }
            }
          ]
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
          secret
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
        practiceTypeValue: props.practiceTypeValue,
        cityValue: props.cityValue
      }
    })
  })
)(SearchPageGQLContainer)
