import React from 'react'
import Filters from 'src/components/searchPage/Filters'
import styled from 'styled-components'
import { displayFlex } from 'src/constants'

const SpacerBar = styled.div`
  width: 100%;
  height: 50px;
  ${displayFlex()}
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

const SearchPage = (props) => (
  <SpacerBar>
    <span>5 Results</span>
    <Filters {...props}/>
  </SpacerBar>
)

export default SearchPage
