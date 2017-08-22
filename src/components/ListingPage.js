import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex, shadow, colors } from 'src/constants'
import SearchDropdown from 'src/components/common/SearchDropdown'
import Backdrop from 'src/components/Backdrop'
import Card from 'src/components/Card'

// {match.params.id}
const FlexWrap = styled.ul`
  ${displayFlex()}
  flex-wrap: wrap;
  padding: 0;
`

const ListingPage = ({match}) => (
  <Backdrop>
    <FlexWrap>
      <Card width='full'/>
      <Card width='half'/>
    </FlexWrap>
  </Backdrop>
)

ListingPage.propTypes = {
  match: PropTypes.object
}

export default ListingPage
