import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
// child components
import ResultList from 'src/components/searchPage/ResultList'

class SearchPageResultsContainer extends Component {
  static propTypes = {
    update:       PropTypes.func,
    data:         PropTypes.object
  }

  render() {

    return(
      <ResultList {...this.props}/>
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
