import React from 'react'
import PropTypes from 'prop-types'
import Rating from 'src/components/Rating'
import styled from 'styled-components'
import {
  shadow,
  fontSize
} from 'src/constants'
// components
import Address from 'react-icons/lib/md/location-on'
import Website from 'react-icons/lib/fa/globe'
import Phone from 'react-icons/lib/md/local-phone'

const LinkableContent = ({ Icon, href, text }) => (
  <li>
    <a
      href={href ? href : 'javascript:void(0);'} 
      target="_blank"
    >
      <Icon />
      {text}
    </a>
  </li>
)

LinkableContent.propTypes = {
  Icon:     PropTypes.node,
  href:     PropTypes.string,
  text:     PropTypes.string,
  link:     PropTypes.boolean
}

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
`

const Frame = styled.div`
  position: relative;
  float: left;
  width: 30vw;
  height: 30vw;
`

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 3px;
`

const Info = styled.ul`
  width: 40vw;
  height: 100%;
  list-style: none;
  padding: 12px;
  float: left;
`

const PracticeName = styled.li`
  width: 100%;
  margin: 0;
  font-weight: 400;
  ${ fontSize(18) }
`

const ResultCard = ({
  name,
  rating,
  address,
  phone,
  website
}) => (
  <Card>
    <InfoSection>
      <Frame>
        <Image src='https://expertbeacon.com/sites/default/files/pain-free_dentistry_can_help_you_get_over_your_fear_of_the_dentist.jpg'/>
      </Frame>
      <Info>
        <PracticeName>{name}</PracticeName>
        <Rating
          // rating={rating}
        />
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
      </Info>
    </InfoSection>
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
