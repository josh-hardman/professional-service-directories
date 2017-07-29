import React from 'react'
import SearchPageFilterBar from 'src/components/searchPage/SearchPageFilterBar'
import ResultsPane from 'src/components/searchPage/ResultsPane'
import { breakpoints } from 'src/constants'
import Media from 'react-media'
import {
  FlexContainer,
  FlexInner,
  FilterAside,
  ResultsAside
} from './styles.js'

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
