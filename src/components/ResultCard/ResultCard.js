import React from 'react'
import PropTypes from 'prop-types'

import './result-card.less'

const ResultCard = ({name}) => (
  <div className="result-card">
    <h4>{name}</h4>
  </div>
)

ResultCard.propTypes = {
  name:   PropTypes.string
}

export default ResultCard
