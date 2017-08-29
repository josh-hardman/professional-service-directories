import React, {Component} from 'react'
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




class Review extends Component {

  static propTypes = {
    name: PropTypes.string,
    review: PropTypes.string,
    rating: PropTypes.number
  }

  render() {
    const {name, review, rating} = this.props

    return (

          <Card width='half'>
            <Name>
              {name}
              <RatingWrapper>
                <Rating showAverage={false} rating={rating}/>
              </RatingWrapper>
              <p>
                {review}
              </p>
            </Name>
          </Card>

    )
  }
}

export default Review
