import React from 'react'
import SearchPageFilterContainer from 'src/containers/SearchPageFilterContainer'
import SearchPageResultsContainer from 'src/containers/SearchPageResultsContainer'
// import SearchPageFilters from 'src/components/searchPage/SearchPageFilters'
// import ResultList from 'src/components/searchPage/ResultList'

import styled from 'styled-components'
import { displayFlex } from 'src/constants'

export const MaxWidth = styled.div`
  width: 100%;
  max-width: 1200px;
`

export const FlexContainer = styled.div`
  ${displayFlex()}
  justify-content: center;
`

export const FlexInner = styled.div`
  width: 1130px;
  padding-top: 80px;
  ${displayFlex()}
  justify-content: space-around;
`

const SearchPage = () => (
  <FlexContainer>
    <MaxWidth>
      <SearchPageFilterContainer />
      <SearchPageResultsContainer />
    </MaxWidth>
  </FlexContainer>
)

export default SearchPage
