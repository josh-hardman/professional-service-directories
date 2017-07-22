import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import { colors, fontSize, breakpoints } from 'src/constants'
// child components
import SearchDropdown from 'src/components/SearchDropdown'

const StyledPageSearch = styled.div`
  background: red;
`

const LandingPageSearch = ({ cityValue, update, data: { allCities=[] } }) => (
  <StyledPageSearch>
    <h1>Find Your Dentist</h1>
    <h3>Search our curated list of highly reputable dentists near you</h3>
    <SearchDropdown
      placeholder='City Name'
      filterKey='city'
      value={cityValue}
      onChange={update}
      options={allCities}
    />
    { cityValue &&
      <Link to='/search'>
        Search
      </Link>
    }
  </StyledPageSearch>
)

LandingPageSearch.propTypes = {
  cityValue:  PropTypes.string,
  update:     PropTypes.func,
  data:       PropTypes.shape({
                allCities: PropTypes.arrayOf(
                  PropTypes.object
                )
              })
}

export default graphql(gql`
  query {
    allCities {
      name,
      id
    }
  }
`)(LandingPageSearch)
