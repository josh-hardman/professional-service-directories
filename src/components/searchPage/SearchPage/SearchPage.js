import React from 'react'
import { breakpoints } from 'src/constants'
import Media from 'react-media'
import DesktopFilters from 'src/components/searchPage/DesktopFilters'
import MobileFilters from 'src/components/searchPage/MobileFilters'
import SearchPageResultsContainer from 'src/containers/SearchPageResultsContainer'

const SearchPage = (props) => (
  <div>
    <Media query={{ minWidth: breakpoints._600} }>
      {matches => matches ? (
        <DesktopFilters {...props}/>
      ) : (
        <div>
          <MobileFilters {...props}/>
          <SearchPageResultsContainer {...props}/>
        </div>
      )}
    </Media>
  </div>
)

export default SearchPage
