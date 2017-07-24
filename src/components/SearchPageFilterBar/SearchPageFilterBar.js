import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import SearchDropdown from 'src/components/SearchDropdown'
import styled from 'styled-components'
import { colors, fontSize, breakpoints } from 'src/constants'
// import './search-page-filter-bar.less'

const StyledFilterBar = styled.div`

`

const SearchPageFilterBar = ({
  data: {
    allCities=[],
    allInsurances=[],
    allVisitReasons=[]
  },
  cityValue,
  insuranceValue,
  visitReasonValue,
  update
}) => (
  <StyledFilterBar>
    <SearchDropdown
      placeholder='City'
      filterKey='city'
      value={cityValue}
      onChange={update}
      options={allCities}
    />

    <SearchDropdown
      placeholder='Insurance Provider'
      filterKey='insurance'
      value={insuranceValue}
      onChange={update}
      options={allInsurances}
    />

    <SearchDropdown
      placeholder='Reason for Visit'
      filterKey='reason'
      value={visitReasonValue}
      onChange={update}
      options={allVisitReasons}
    />
  </StyledFilterBar>
)

SearchPageFilterBar.propTypes = {
  data:             PropTypes.shape({
                      allCities:        PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                      allInsurances:    PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                      allVisitReasons:  PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                    }),
  cityValue:        PropTypes.string,
  insuranceValue:   PropTypes.string,
  visitReasonValue: PropTypes.string,
  update:           PropTypes.func
}

export default graphql(gql`
  query {
    allCities {
      name,
      id
    },
    allInsurances {
      name,
      id
    },
    allVisitReasons {
      name,
      id
    }
  }
`)(SearchPageFilterBar)
