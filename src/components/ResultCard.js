import React from 'react'
import PropTypes from 'prop-types'
import Rating from 'src/components/Rating'
import styled from 'styled-components'
import {
  shadow,
  colors,
  fontSize,
  displayFlex,
  breakpoints
} from 'src/constants'
// components
import Address from 'react-icons/lib/go/location'
import Website from 'react-icons/lib/fa/globe'
import Phone from 'react-icons/lib/md/local-phone'
import LinkableContent from 'src/components/LinkableContent'

const imageDimention = 30
const padding = {
  small: '14px',
  medium: '18px',
  large: '24px',
}

const InfoRow = styled.div`
  width: 100%;
  height: ${imageDimention}vw;
  ${displayFlex()}
  max-height: 145px;

  @media screen and (min-width: ${breakpoints._600}) {
    height: ${imageDimention/2}vw;
	}
`

const Frame = styled.div`
  position: relative;
  width: ${imageDimention}vw;
  min-width: ${imageDimention}vw;
  max-width: 145px;

  @media screen and (min-width: ${breakpoints._600}) {
    width: ${imageDimention/2}vw;
    min-width: ${imageDimention/2}vw;
	}
`

const Image = styled.img`
  position: absolute;
  width: ${imageDimention}vw;
  max-width: 145px;
  height: ${imageDimention}vw;
  max-height: 145px;
  border-radius: 6px;

  @media screen and (min-width: ${breakpoints._600}) {
    width: ${imageDimention/2}vw;
    max-width: 145px;
    height: ${imageDimention/2}vw;
    max-height: 145px;
	}
`

const Info = styled.div`
  ${displayFlex()}
  flex-direction: column;
  padding-left: ${padding.small};

  @media screen and (min-width: ${breakpoints._600}) {
    padding-left: ${padding.medium};
	}
`

const InfoTop = styled.div`
  flex: 1;
  list-style: none;
`

const InfoBottom = styled.ul`
  flex: 1;
  ${displayFlex()}
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`

const PracticeName = styled.h1`
  width: 100%;
  margin: 0;
  padding-bottom: 4px;
  margin: 0;
  font-weight: 400;
  ${ fontSize(18) }

  @media screen and (min-width: ${breakpoints._500}) {
    ${ fontSize(24) }
	}

  @media screen and (min-width: ${breakpoints._600}) {
    ${ fontSize(18) }
	}
`

const CardPadding = styled.li`
  padding: 8px;
  width: 100%;

  @media screen and (min-width: ${breakpoints._768}) {
    width: 50%;
	}
`

const Card = styled.div`
  width: 100%;
  padding: ${padding.small};
  margin-top: 8px;
  list-style: none;
  background: white;
  ${ shadow }
`

const ButtonRow = styled.div`
  ${displayFlex()}
  padding-top: ${padding.small};
  margin-top: ${padding.small};
  border-top: 1px solid ${colors.lightGray};
`

const ButtonLeft = styled.div`
  width: ${imageDimention}vw;
  min-width: ${imageDimention}vw;
  max-width: 145px;

  @media screen and (min-width: ${breakpoints._600}) {
    width: ${imageDimention/2}vw;
    min-width: ${imageDimention/2}vw;
	}
`

const ButtonRight = styled.div`
  min-width: ${imageDimention}vw;
  padding-left: ${padding.small};

  @media screen and (min-width: ${breakpoints._600}) {
    min-width: ${imageDimention/2}vw;
	}
`

const ProfileButton = styled.button`
  border-radius: 3px;
  background: ${colors.blue};
  border: 1px solid ${colors.blue};
  color: ${colors.white};
  ${fontSize(14)}
  padding: 4px;
  width: 100%;
`

const ScheduleButton = styled.button`
  border-radius: 3px;
  background: ${colors.white};
  color: ${colors.blue};
  ${fontSize(14)}
  border: 1px solid ${colors.blue};
  padding: 4px;
  width: 100%;
`

const StyledLinkableContent = styled(LinkableContent)`
  ${fontSize(34)}
`

const ResultCard = ({
  name,
  // rating,
  address,
  phone,
  website
}) => (
  <CardPadding>
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
            <StyledLinkableContent
              Icon={Address}
              text={address}
            />
            <StyledLinkableContent
              Icon={Website}
              href={website}
              text={website}
            />
            <StyledLinkableContent
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
  </CardPadding>
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
