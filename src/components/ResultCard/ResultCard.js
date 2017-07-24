import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './result-card.less'

const Card = styled.div`
width: 48%;
display: flex;
justify-content: center;
align-items: center;
background: white;
border-radius: 3px;
box-shadow: 2px 2px 4px black;
`

const ResultCard = ({ name, rating }) => (
  <Card>
    <h4>{name}</h4>
    { rating &&
      <p>rating: {rating}</p>
    }
  </Card>
)

ResultCard.propTypes = {
  name:   PropTypes.string,
  rating: PropTypes.number
}

export default ResultCard
