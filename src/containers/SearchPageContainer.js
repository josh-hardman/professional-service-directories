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
    update:               PropTypes.func,
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
                          )
  }

  componentDidMount() {
    const { allCities, allPracticeTypes, allInsurances, fetchFilterOptions } = this.props
      !allCities.length && !allPracticeTypes.length && !allInsurances.length &&
        fetchFilterOptions()
  }

  render() {

    return (
      <h1>Search Page Container</h1>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer)
