import React from 'react'
import PropTypes from 'prop-types'
// child components
import ResultCard from 'src/components/ResultCard'

import './results-pane.less'

const ResultsPane = () => (
  <div className="results-pane">
    <div className="results-pane__column">
      <p>9 Results</p>
      <div className="results-pane__column__board">
        <ResultCard />
      </div>
    </div>
  </div>
)

ResultsPane.propTypes = {
  location:   PropTypes.string,
  insurance:  PropTypes.string,
  reason:     PropTypes.string,
  update:     PropTypes.func
}

export default ResultsPane
