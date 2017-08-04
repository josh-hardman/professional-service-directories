import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

export default class ResultsPane extends Component {
  static propTypes = {
    results:  PropTypes.arrayOf(
                PropTypes.object
              )
  }

  averageReview = reviews => {
    const total = reviews.reduce( (prev, current) => {
      return prev + current.rating
    }, 0)

    return reviews.length ? total/reviews.length : null
  }

  render() {
    const { results } = this.props

    return(
      <StyledResultsPane>
        <FlexContainer>
            { results && results.map( (dentist, i) => (
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
