import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from 'src/components/Card'
import { fontSize, displayFlex } from 'src/constants'
import Rating from 'src/components/Rating'

const Name = styled.h1`
  ${fontSize(14)}
  width: 100%;
  font-weight: 400;
  text-align: center;
  margin: 0;
`

const RatingWrapper = styled.div`
  ${displayFlex()}
  justify-content: center;
`

const Details = styled.p`

`

const Review = ({name, review, rating}) => (
  <Card width='third'>
    <Name>
      {name}
      <RatingWrapper>
        <Rating showAverage={false} rating={rating}/>
      </RatingWrapper>
      <Details>
        {review}
      </Details>
    </Name>
  </Card>
)

Review.propTypes = {
  name: PropTypes.string,
  review: PropTypes.string,
  rating: PropTypes.number
}

export default Review
