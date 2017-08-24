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

const Review = (props) => (
  <Card width='third'>
    <Name>
      Iron Man
      <RatingWrapper>
        <Rating showAverage={false}/>
      </RatingWrapper>
      <Details>
        I had a really great experience with Dr. Hyde. He was super nice and gave me a high five afterwards
      </Details>
    </Name>
  </Card>
)

Review.propTypes = {

}

export default Review
