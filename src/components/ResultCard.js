import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  shadow,
  displayFlex,
  fontSize
} from 'src/constants'

const Card = styled.li`
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  ${ shadow }
`

const InfoSection = styled.div`
  width: 100%;
  ${'' /* border: 1px solid red; */}
`

const Frame = styled.div`
  position: relative;
  float: left;
  ${'' /* width: 40%; */}
  width: 25vw;
  height: 25vw;
  border: 1px solid green;

  ${'' /* &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
    border: 1px solid red;
  } */}
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 3px;
`

const Info = styled.div`
  width: 75%;
  height: 100%;
  ${'' /* border: 1px solid green; */}
  padding: 12px;
  float: left;
`

const PracticeName = styled.h1`
  width: 100%;
  margin: 0;
  font-weight: 400;
  ${ fontSize(18) }
`

const Rating = styled.p`
  width: 100%;
  margin: 0;
  ${ fontSize(12) }
`

const Social = styled.ul`
  list-style: none;
  padding: 0;
  ${ fontSize(12) }
`

const MediaLink = styled.li`

`

const ResultCard = ({ name }) => (
  <Card>
    <InfoSection>
      <Frame>
        <Image src='https://expertbeacon.com/sites/default/files/pain-free_dentistry_can_help_you_get_over_your_fear_of_the_dentist.jpg'/>
      </Frame>
      <Info>
        <PracticeName>{name}</PracticeName>
        {/* <Rating>ratingz: {rating ? rating : 'N/A'}</Rating> */}
        {/* { social &&
          <Social>
            <MediaLink>{social.website}</MediaLink>
          </Social>
        } */}
      </Info>
    </InfoSection>
  </Card>
)

ResultCard.propTypes = {
  name:   PropTypes.string,
  rating: PropTypes.number,
  social: PropTypes.object
}

export default ResultCard
