import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fontSize } from 'src/constants'
// child components
import Star from 'src/components/Star'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
`

const AvgRating = styled.span`
  ${fontSize(14)}
  color: ${colors.red};
  padding-right: 4px;
`

const NumReviews = styled.span`
${fontSize(12)}
color: ${colors.mediumGray};
padding-left: 4px;
`

const stars = [1,2,3,4,5]

const Rating = ({ rating=4.5, numReviews }) => (
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
    <NumReviews>{`(${numReviews})`}</NumReviews>
  </List>
)

Rating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.number
}

export default Rating
