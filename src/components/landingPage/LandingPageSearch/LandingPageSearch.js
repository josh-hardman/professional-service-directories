import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  colors,
  fontSize,
  displayFlex
} from 'src/constants'
// child components
import SearchDropdown from 'src/components/common/SearchDropdown'
import SearchIcon from 'react-icons/lib/md/search'

const StyledPageSearch = styled.div`
  padding: 20px;
`

const Header = styled.div`
  ${ fontSize(36) }
  text-align: center;
  color: ${colors.textDefault};
`

const Info = styled.div`
  ${ fontSize(14) }
  text-align: center;
  color: ${colors.textDefault};
`

const FilterWrapper = styled.div`
  ${displayFlex()}
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
  bottom: 0;
  color: ${colors.white};
  background: ${colors.blue};
  ${fontSize(20)}
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border: none;
  ${displayFlex()}
  justify-content: center;
  align-items: center;
`

const LandingPageSearch = ({ cityValue, update }) => (
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
          options={[]}
        />
        { cityValue &&
          <Link to='/search'>
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </Link>
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

export default LandingPageSearch
