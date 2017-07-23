import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import { colors, fontSize, displayFlex, breakpoints } from 'src/constants'
// child components
import SearchDropdown from 'src/components/SearchDropdown'

const StyledPageSearch = styled.div`
  padding: 20px;
`

const Header = styled.div`
  ${ fontSize(64) }
  text-align: center;
  color: ${colors.textDefault};
`

const Info = styled.div`
  ${ fontSize(18) }
  text-align: center;
  color: ${colors.textDefault};
`

const FilterWrapper = styled.div`
  ${ displayFlex() }
  padding: 20px;
  justify-content: center;
`

const Filter = styled.div`
  position: relative;
  width: 80%;
`

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`

const LandingPageSearch = ({ cityValue, update, data: { allCities=[] } }) => (
  <StyledPageSearch>
    <Header>Find Your Dentist</Header>
    <Info>Search our curated list of highly reputable dentists near you</Info>
    <FilterWrapper>
      <Filter>
        <SearchDropdown
          placeholder='City Name'
          filterKey='city'
          value={cityValue}
          onChange={update}
          options={allCities}
        />
        { cityValue &&
          <SearchButton>
            <Link to='/search'>
              Search
            </Link>
          </SearchButton>
        }
      </Filter>
    </FilterWrapper>
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
