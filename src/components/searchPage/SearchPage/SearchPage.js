import React from 'react'
import { breakpoints } from 'src/constants'
import Media from 'react-media'
import DesktopFilters from 'src/components/searchPage/DesktopFilters'
import MobileFilters from 'src/components/searchPage/MobileFilters'

const SearchPage = (props) => (
  <div>
    <Media query={{ minWidth: breakpoints._600} }>
      {matches => matches ? (
        <DesktopFilters {...props}/>
      ) : (
        <MobileFilters {...props}/>
      )}
    </Media>
  </div>
)

export default SearchPage
