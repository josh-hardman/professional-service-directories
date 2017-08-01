import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import { displayFlex, colors } from 'src/constants.js'
// child components
import ResultCard from 'src/components/searchPage/ResultCard'

const StyledResultsPane = styled.div`
  width: 100%;
  background: ${ colors.lightGray };
  ${ displayFlex() }
  justify-content: center;
  align-items: center;
  padding: 12px;
`

const FlexContainer = styled.div`
  width: 100%;
`

class ResultsPane extends Component {
  static propTypes = {
    location:     PropTypes.string,
    practiceType:    PropTypes.string,
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
    const { data: { allPractices=[] } } = this.props

    return(
      <StyledResultsPane>
        <FlexContainer>
            { allPractices && allPractices.map( (dentist, i) => (
              <ResultCard
                key={i}
                name={dentist.name}
                rating={this.averageReview(dentist.reviews)}
                social={dentist.contact}
              />
            ))}
        </FlexContainer>
      </StyledResultsPane>
    )
  }
}

export default graphql(gql`
  query
  {
    # ( $practiceTypeValue: ID! )
    allPractices
    # (
    #   filter: {
    #     practiceTypes_some: {
    #       id: $practiceTypeValue
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
      practiceTypeValue: props.practiceTypeValue
    }
  })
})(ResultsPane)
