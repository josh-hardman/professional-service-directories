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

const Card = styled.div`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  list-style: none;
  background: white;
  ${ shadow }
`

const Image = styled.img`
  width: 40%;
  display: inline-block;
`

const InfoList = styled.div`
  margin: 0;
  padding: 0;
  width: 60%;
  float: right;
  padding-left: 12px;
`

const PracticeName = styled.h1`
  width: 100%;
  margin: 0;
  padding-bottom: 4px;
  margin: 0;
  font-weight: 400;
  ${ fontSize(18) }
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

const ResultCard = ({
  name,
  // rating,
  address,
  phone,
  website
}) => (
  <Card className="clearfix">
    <Image
      src="https://images.graph.cool/v1/cj590hy2dfdtl0105kwjxsfpv/cj5rn4aft01ay0131ckukd97e/100x0:300x300"
    />
    <InfoList>
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
    </InfoList>
  </Card>
)

ResultCard.propTypes = {
  address:  PropTypes.string,
  phone:    PropTypes.string,
  name:     PropTypes.string,
  src:      PropTypes.string,
  website:  PropTypes.string,
  facebook: PropTypes.string,
  rating:   PropTypes.number,
  social:   PropTypes.object
}

export default ResultCard
