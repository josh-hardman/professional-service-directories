import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import SearchDropdown from 'src/components/SearchDropdown'
import './search-page-filter-bar.less'

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
  <div className='search-page-filter-bar'>
    <div className='search-page-filter-bar__wrapper'>
      <div className='search-page-filter-bar__wrapper__filter'>
        <SearchDropdown
          placeholder='City'
          filterKey='city'
          value={cityValue}
          onChange={update}
          options={allCities}
        />
      </div>
      <div className='search-page-filter-bar__wrapper__filter'>
        <SearchDropdown
          placeholder='Insurance Provider'
          filterKey='insurance'
          value={insuranceValue}
          onChange={update}
          options={allInsurances}
        />
      </div>
      <div className='search-page-filter-bar__wrapper__filter'>
        <SearchDropdown
          placeholder='Reason for Visit'
          filterKey='reason'
          value={visitReasonValue}
          onChange={update}
          options={allVisitReasons}
        />
      </div>
    </div>
  </div>
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
