import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from 'src/constants'
import Media from 'react-media'
import styled from 'styled-components'
import FilterIcon from 'react-icons/lib/md/filter-list'
// import SearchDropdown from 'src/components/common/SearchDropdown'

const FilterButton = styled.button`

`

const Filters = (
//   {
//    data: {
//      allCities=[],
//      allInsurances=[],
//      allVisitReasons=[]
//   },
//   cityValue,
//   insuranceValue,
//   visitReasonValue,
//   update
// }
) => (
  <FilterButton>
    <FilterIcon />
    Filters
  </FilterButton>
)

Filters.propTypes = {
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
                    }).required,
  cityValue:        PropTypes.string,
  insuranceValue:   PropTypes.string,
  visitReasonValue: PropTypes.string,
  update:           PropTypes.func
}

export default Filters
