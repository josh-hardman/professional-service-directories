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

const ResultCard = ({name}) => (
  <Card>
    <h4>{name}</h4>
  </Card>
)

ResultCard.propTypes = {
  name:   PropTypes.string
}

export default ResultCard
