import React, { Component } from 'react'
import PropTypes from 'prop-types'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions/filterValuesActions'
import {
  fetchGQLData
} from 'src/redux/actions/filterOptionsActions'
// queries
import { searchPageFiltersOptions,  } from 'src/queries/filterOptions'
// components
import SearchPageFilters from 'src/components/SearchPageFilters'

const mapStateToProps = ({
  filterValues: {
    city,
    practiceType,
    insurance
  },
  filterOptions: {
    allCities,
    allPracticeTypes,
    allInsurances
  }
}) => ({
  city: city ? city : '',
  practiceType: practiceType ? practiceType : '',
  insurance: insurance ? insurance : '',
  allCities: allCities ? allCities : [],
  allPracticeTypes: allPracticeTypes ? allPracticeTypes : [],
  allInsurances: allInsurances ? allInsurances : []
})

const mapDispatchToProps = dispatch => {

  return {
    fetchFilterOptions: () => dispatch(
      fetchGQLData(searchPageFiltersOptions)
    ),
    update: ({ filterKey, value }) => dispatch(
      updateFilter({
        filterKey,
        value
      })
    )
  }
}

class SearchPageFilterContainer extends Component {
  static propTypes = {
    city:                 PropTypes.string,
    practiceType:         PropTypes.string,
    insurance:            PropTypes.string,
    fetchCities:          PropTypes.func,
    fetchFilterOptions:   PropTypes.func,
    allCities:            PropTypes.arrayOf(
                            PropTypes.object
                          ),
    allPracticeTypes:     PropTypes.arrayOf(
                            PropTypes.object
                          ),
    allInsurances:        PropTypes.arrayOf(
                            PropTypes.object
                          ),
    update:               PropTypes.func,
    numResults:           PropTypes.number
  }

  componentDidMount() {
    const {
      fetchFilterOptions
    } = this.props

    fetchFilterOptions()

  }

  render() {

    const {
      city=[],
      practiceType=[],
      insurance=[],
      allCities,
      allPracticeTypes,
      allInsurances,
      update,
      numResults=0
    } = this.props

    return (
      <SearchPageFilters
        city={city}
        practiceType={practiceType}
        insurance={insurance}
        allCities={allCities}
        allPracticeTypes={allPracticeTypes}
        allInsurances={allInsurances}
        update={update}
        numResults={numResults}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageFilterContainer)
