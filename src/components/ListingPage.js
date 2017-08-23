import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex, colors, fontSize } from 'src/constants'
// import SearchDropdown from 'src/components/common/SearchDropdown'
import Backdrop from 'src/components/Backdrop'
import Card from 'src/components/Card'
import Rating from 'src/components/Rating'

// {match.params.id}
const FlexWrap = styled.ul`
  ${displayFlex()}
  flex-wrap: wrap;
  padding: 0;
`

const Title = styled.h3`
  color: ${colors.blue};
  font-weight: 400;
  margin: 0;
`

const ListingPage = ({practice}) => (
  <Backdrop>
    {
      !practice &&
        <span>LOADING...</span>
    }
    {
      practice &&
        <FlexWrap>
          <Card width='full'>
            <Title>{practice.name}</Title>
            <Rating rating={3.5}/>
          </Card>
          <Card width='half'>
            <Title>About Us</Title>
          </Card>
          <Card width='half'>
            <Title>Welcome Video</Title>
          </Card>
          <Card width='full'>
            <Title>Patient Testimonials</Title>
          </Card>
        </FlexWrap>
    }
  </Backdrop>
)

ListingPage.propTypes = {
  practice: PropTypes.object
}

export default ListingPage
