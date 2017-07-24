import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
// child components
import ResultCard from 'src/components/ResultCard'

import './results-pane.less'

const averageReview = reviews => {
  const total = reviews.reduce( (prev, current) => {
    return prev + current.rating
  }, 0)

  return reviews.length && total/reviews.length
}

const ResultsPane = ({ data: { allDentists=[] }}) => {

  return(
    <div className="results-pane">
      <div className="results-pane__column">
        <div className="results-pane__column__board">
          { allDentists && allDentists.map( (dentist, i) => (
            <ResultCard
              key={i}
              name={dentist.name}
              rating={averageReview(dentist.reviews)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

ResultsPane.propTypes = {
  location:     PropTypes.string,
  insurance:    PropTypes.string,
  reason:       PropTypes.string,
  update:       PropTypes.func,
  data:         PropTypes.object
}

export default graphql(gql`
  query( $insuranceValue: ID! ) {
    allDentists( filter: {
        insurances_some: {
          id: $insuranceValue
      }
    }) {
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
