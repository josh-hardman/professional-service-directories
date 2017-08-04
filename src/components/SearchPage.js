import React from 'react'
import SearchPageFilterContainer from 'src/containers/SearchPageFilterContainer'
import SearchPageResultsContainer from 'src/containers/SearchPageResultsContainer'
// import SearchPageFilters from 'src/components/searchPage/SearchPageFilters'
// import ResultList from 'src/components/searchPage/ResultList'

import styled from 'styled-components'
import { displayFlex } from 'src/constants'

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

export const FilterAside = styled.div`
  width: 20%;
`

export const ResultsAside = styled.div`
  width: 80%;
`

const SearchPage = () => (
  <div>
    <SearchPageFilterContainer />
    <SearchPageResultsContainer />
  </div>
)

export default SearchPage
