import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
// child components
import ResultCard from 'src/components/searchPage/ResultCard'

class SearchPageResultsContainer extends Component {
  static propTypes = {
    location:     PropTypes.string,
    insurance:    PropTypes.string,
    reason:       PropTypes.string,
    update:       PropTypes.func,
    data:         PropTypes.object
  }

  averageReview = reviews => {
    const total = reviews.reduce( (prev, current) => {
      return prev + current.rating
    }, 0)

    return reviews.length ? total/reviews.length : null
  }

  render() {
    const { data: { allDentists=[] } } = this.props

    return(
      <ul>
        {
          allDentists.map( (dentist, i) =>
            <ResultCard
              key={i}
              name={dentist.name}
            />
          )
        }
      </ul>
    )
  }
}

export default graphql(gql`
  query
  {
    # ( $insuranceValue: ID! )
    allDentists
    # (
    #   filter: {
    #     insurances_some: {
    #       id: $insuranceValue
    #     }
    #   }
    # )
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
    }
  }
`, {
  options: (props) => ({
    variables: {
      insuranceValue: props.insuranceValue
    }
  })
})(SearchPageResultsContainer)
