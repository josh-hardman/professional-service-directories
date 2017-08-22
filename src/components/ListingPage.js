import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex } from 'src/constants'
// import SearchDropdown from 'src/components/common/SearchDropdown'
import Backdrop from 'src/components/Backdrop'
import Card from 'src/components/Card'

// {match.params.id}
const FlexWrap = styled.ul`
  ${displayFlex()}
  flex-wrap: wrap;
  padding: 0;
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
          <Card width='full'>{practice.name}</Card>
          <Card width='half'/>
          <Card width='half'/>
        </FlexWrap>
    }
  </Backdrop>
)

ListingPage.propTypes = {
  practice: PropTypes.object
}

export default ListingPage
