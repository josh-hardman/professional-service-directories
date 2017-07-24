import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, shadow } from 'src/constants'

import './result-card.less'

const Card = styled.div`
  width: 48%;
  margin: 1%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  ${ shadow }
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
