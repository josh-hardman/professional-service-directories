import React from 'react'
import SearchPageFilterBar from 'src/components/SearchPageFilterBar'
import ResultsPane from 'src/components/ResultsPane'
import styled from 'styled-components'
import { displayFlex } from 'src/constants'

const FlexContainer = styled.div`
  ${displayFlex()}
  justify-content: center;
`

const FlexInner = styled.div`
  width: 80%;
  ${displayFlex()}
  justify-content: space-around;
`

const FilterAside = styled.div`
  min-width: 300px;
  width: 20%;
`

const ResultsAside = styled.div`
  width: 80%;
`

const SearchPageWrapper = (props) => (
  <FlexContainer>
    <FlexInner>
      <FilterAside>
        <SearchPageFilterBar
          {...props}
        />
      </FilterAside>
      <ResultsAside>
        <ResultsPane
          {...props}
        />
      </ResultsAside>
    </FlexInner>
  </FlexContainer>
)

export default SearchPageWrapper
