import React from 'react'
import SearchPageFilters from 'src/components/searchPage/SearchPageFilters'
import SearchPageResultsContainer from 'src/containers/SearchPageResultsContainer'

const SearchPage = (props) => (
  <div>
    <SearchPageFilters {...props}/>
    <SearchPageResultsContainer {...props}/>
  </div>
)

export default SearchPage
