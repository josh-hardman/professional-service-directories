import React from 'react'
import SearchPageFilterContainer from 'src/containers/SearchPageFilterContainer'
import Header from 'src/components/Header.js'

const SearchPage = () => (
  <div>
    <Header
      header={'Dentto'}
      subHeader={'Discover your perfect Dentist.'}
    />
    <SearchPageFilterContainer/>
  </div>
)

export default SearchPage
