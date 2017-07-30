import React from 'react'
import SearchPageFilters from 'src/components/searchPage/SearchPageFilters'
import ResultList from 'src/components/searchPage/ResultList'

const SearchPage = (props) => (
  <div>
    <SearchPageFilters {...props}/>
    <ResultList {...props}/>
  </div>
)

export default SearchPage
