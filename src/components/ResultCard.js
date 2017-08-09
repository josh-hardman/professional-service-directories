import React from 'react'
import PropTypes from 'prop-types'
import Rating from 'src/components/Rating'
import styled from 'styled-components'
import {
  shadow,
  colors,
  fontSize,
  displayFlex
} from 'src/constants'
// components
import Address from 'react-icons/lib/go/location'
import Website from 'react-icons/lib/fa/globe'
import Phone from 'react-icons/lib/md/local-phone'
import LinkableContent from 'src/components/LinkableContent'

const imageDimention = 140

const InfoRow = styled.div`
  width: 100%;
  height: ${imageDimention}px;
  ${displayFlex()}
  border: 1px solid black;
`

const Frame = styled.div`
  position: relative;
  width: ${imageDimention}px;
`

const Image = styled.img`
  position: absolute;
  width: ${imageDimention}px;
  height: ${imageDimention}px;
  border-radius: 3px;
`

const Info = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  ${displayFlex()}
  flex-direction: column;
  padding-left: 12px;
`

const InfoTop = styled.div`
  flex: 1;
  list-style: none;
  border: 1px solid blue;
`

const InfoBottom = styled.ul`
  flex: 1;
  ${displayFlex()}
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid red;
`

const PracticeName = styled.h1`
  width: 100%;
  margin: 0;
  padding-bottom: 4px;
  margin: 0;
  font-weight: 400;
  ${ fontSize(18) }
`
const Card = styled.li`
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  list-style: none;
  background: white;
  ${ shadow }
`

const ButtonRow = styled.div`
  ${displayFlex()}
  ${'' /* background: red; */}
  padding-top: 12px;
`

const ButtonLeft = styled.div`
  width: ${imageDimention}px;
`

const ButtonRight = styled.div`
  flex-grow: 1;
  padding-left: 12px;
`

const ProfileButton = styled.button`
  border-radius: 3px;
  background: ${colors.blue};
  color: ${colors.white};
  border: none;
  padding: 6px;
  width: 100%;
`

const ScheduleButton = styled.button`
  border-radius: 3px;
  background: ${colors.white};
  color: ${colors.blue};
  border: 1px solid ${colors.blue};
  padding: 6px;
  width: 100%;
`

const ResultCard = ({
  name,
  // rating,
  address,
  phone,
  website
}) => (
  <Card>
    <InfoRow>
      <Frame>
        <Image src='https://expertbeacon.com/sites/default/files/pain-free_dentistry_can_help_you_get_over_your_fear_of_the_dentist.jpg'/>
      </Frame>
      <Info>
        <InfoTop>
          <PracticeName>{name}</PracticeName>
          <Rating
            // rating={rating}
            numReviews={5}
          />
        </InfoTop>
        <InfoBottom>
          <LinkableContent
            Icon={Address}
            text={address}
          />
          <LinkableContent
            Icon={Website}
            href={website}
            text={website}
          />
          <LinkableContent
            Icon={Phone}
            href={phone}
            text={phone}
          />
        </InfoBottom>
      </Info>
    </InfoRow>
    <ButtonRow>
      <ButtonLeft>
        <ProfileButton>
          View Profile
        </ProfileButton>
      </ButtonLeft>
      <ButtonRight>
        <ScheduleButton>
          Book Appointment
        </ScheduleButton>
      </ButtonRight>
    </ButtonRow>
  </Card>
)

ResultCard.propTypes = {
  address:  PropTypes.string,
  phone:    PropTypes.string,
  name:     PropTypes.string,
  website:  PropTypes.string,
  facebook: PropTypes.string,
  rating:   PropTypes.number,
  social:   PropTypes.object
}

export default ResultCard
