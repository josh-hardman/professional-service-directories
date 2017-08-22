import React from 'react'
import PropTypes from 'prop-types'
import Rating from 'src/components/Rating'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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

const Card = styled.div`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  list-style: none;
  background: white;
  min-width: 340px;
  max-width: 465px;
  ${ shadow }
`

const Image = styled.img`
  width: 140px;
  display: inline-block;
  border-radius: 3px;
`

const InfoList = styled.div`
  margin: 0;
  padding: 0;
  width: 60%;
  float: right;
  padding-left: 24px;
`

const PracticeName = styled(Link)`
  width: 100%;
  margin: 0;
  padding-bottom: 4px;
  margin: 0;
  font-weight: 400;
  ${ fontSize(18) }
  color: ${colors.textDefault};
  text-decoration: none;
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

const ButtonRow = styled.div`
  ${displayFlex()}
  padding-top: 12px;
  margin-top: 12px;
  border-top: 1px solid ${colors.lightGray};
`

const ButtonLeft = styled.div`
  width: 40%;
  max-width: 160px;
`

const ButtonRight = styled.div`
  padding-left: 24px;
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
  padding: 4px 12px 4px 12px;
  width: 100%;
`

const ResultCard = ({
  id,
  name,
  // rating,
  address,
  phone,
  website,
  imageSecret
}) => (
  <Card>
    <Link to={`/listing/${id}`}>
      <Image
        src={ imageSecret
          ? `https://images.graph.cool/v1/cj590hy2dfdtl0105kwjxsfpv/${imageSecret}/300x`
          : 'https://images.graph.cool/v1/cj590hy2dfdtl0105kwjxsfpv/cj5rn4aft01ay0131ckukd97e/100x0:300x300'
        }
      />
    </Link>
    <InfoList>
      <InfoTop>
          <PracticeName
            to={`/listing/${id}`}
          >
            {name}
          </PracticeName>
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
    </InfoList>
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
  id:           PropTypes.string,
  address:      PropTypes.string,
  phone:        PropTypes.string,
  name:         PropTypes.string,
  src:          PropTypes.string,
  website:      PropTypes.string,
  facebook:     PropTypes.string,
  rating:       PropTypes.number,
  social:       PropTypes.object,
  imageSecret:  PropTypes.string
}

export default ResultCard
