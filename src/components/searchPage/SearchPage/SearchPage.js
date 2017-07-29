import React from 'react'
import PropTypes from 'prop-types'
// import SearchPageFilterBar from 'src/components/searchPage/SearchPageFilterBar'
// import ResultsPane from 'src/components/searchPage/ResultsPane'
import { breakpoints } from 'src/constants'
import Media from 'react-media'
import MobileFilters from 'src/components/searchPage/MobileFilters'
// import {
//   FlexContainer,
//   FlexInner,
//   FilterAside,
//   ResultsAside
// } from './styles.js'

const SearchPage = ({
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
  <h1>Search Page</h1>
  // <Media query={{ minWidth: breakpoints._600} }>
  //   {matches => matches ? (
  //     // <FlexContainer>
  //     //   <FlexInner>
  //     //     <FilterAside>
  //     //       <SearchPageFilterBar
  //     //         {...props}
  //     //       />
  //     //     </FilterAside>
  //     //     <ResultsAside>
  //     //       <ResultsPane
  //     //         {...props}
  //     //       />
  //     //     </ResultsAside>
  //     //   </FlexInner>
  //     // </FlexContainer>
  //     <h1>desktop</h1>
  //   ) : (
  //     <MobileFilters />
  //   )}
  // </Media>

)

SearchPage.propTypes = {
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

export default SearchPage
