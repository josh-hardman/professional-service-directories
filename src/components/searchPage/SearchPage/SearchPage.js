import React from 'react'
import SearchPageFilterBar from 'src/components/searchPage/SearchPageFilterBar'
import ResultsPane from 'src/components/searchPage/ResultsPane'
import styled from 'styled-components'
import { displayFlex, breakpoints } from 'src/constants'
import Media from 'react-media'

const FlexContainer = styled.div`
  ${displayFlex()}
  justify-content: center;
`

const FlexInner = styled.div`
  width: 1130px;
  padding-top: 80px;
  ${displayFlex()}
  justify-content: space-around;
`

const FilterAside = styled.div`
  width: 20%;
`

const ResultsAside = styled.div`
  width: 80%;
`

const SearchPage = (props) => (
  <Media query={{ minWidth: breakpoints._600} }>
    {matches => matches ? (
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
    ) : (
      <h1>mobile</h1>
    )}
  </Media>

)

export default SearchPage
