import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from 'src/constants'
// child components
import Star from 'src/components/Star'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const AvgRating = styled.span`
  color: ${colors.red}
`

const stars = [1,2,3,4,5]

const Rating = ({ rating=4.5 }) => (
  <List>
    <AvgRating>{rating}</AvgRating>
    {
      stars.map( (star, i) => (
        <Star
          type={ rating >= star ? 'full' : ( rating + .5 >= star ? 'half' : 'outline' )}
          color='red'
          key={i}
        />
      ))
    }
  </List>
)

Rating.propTypes = {
  rating: PropTypes.number
}

export default Rating
