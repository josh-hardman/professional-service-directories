import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import { displayFlex, colors } from 'src/constants.js'
// child components
import ResultCard from 'src/components/ResultCard'

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
    insurance:    PropTypes.string,
    reason:       PropTypes.string,
    update:       PropTypes.func,
    data:         PropTypes.object
  }

  averageReview = reviews => {
    const total = reviews.reduce( (prev, current) => {
      return prev + current.rating
    }, 0)

    return reviews.length && total/reviews.length
  }

  render() {
    const { data: { allDentists=[] } } = this.props

    return(
      <StyledResultsPane>
        <FlexContainer>
            { allDentists && allDentists.map( (dentist, i) => (
              <ResultCard
                key={i}
                name={dentist.name}
                rating={this.averageReview(dentist.reviews)}
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
})(ResultsPane)
