import React, { Component } from 'react'
import PropTypes from 'prop-types'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions/filterActions'
import {
  fetchGQLData
} from 'src/redux/actions/filterOptionsActions'
// queries
import { searchPageFiltersOptions } from 'src/queries/filterOptions'
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

const mapDispatchToProps = dispatch => ({
    fetchFilterOptions: () => dispatch(fetchGQLData(searchPageFiltersOptions)),
    update: ({ filterKey, value }) => dispatch(updateFilter({
      filterKey,
      value
    }))
})

class SearchPageContainer extends Component {
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
  }

  componentDidMount() {
    const { allCities, allPracticeTypes, allInsurances, fetchFilterOptions } = this.props
      !allCities.length && !allPracticeTypes.length && !allInsurances.length &&
        fetchFilterOptions()
  }

  static propTypes = {
    filterValues: PropTypes.object,
    filterOptions: PropTypes.object
  }

  render() {

    const {
      city=[],
      practiceType=[],
      insurance=[],
      allCities,
      allPracticeTypes,
      allInsurances,
      update
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
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer)
