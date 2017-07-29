import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from 'src/constants'
import Media from 'react-media'

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
  <Media query={{ minWidth: breakpoints._600} }>
    {matches => matches ? (
      // <FlexContainer>
      //   <FlexInner>
      //     <FilterAside>
      //       <SearchPageFilterBar
      //         {...props}
      //       />
      //     </FilterAside>
      //     <ResultsAside>
      //       <ResultsPane
      //         {...props}
      //       />
      //     </ResultsAside>
      //   </FlexInner>
      // </FlexContainer>
      <h1>desktop filters</h1>
    ) : (
      <h1>mobile filters</h1>
    )}
  </Media>
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
