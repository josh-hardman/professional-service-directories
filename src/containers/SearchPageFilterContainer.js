import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import SearchPageFilterBar from 'src/components/SearchPageFilterBar'
import ResultsPane from 'src/components/ResultsPane'
// redux
import { connect } from 'react-redux'
import {
  fetchCities,
  fetchInsurances,
  fetchVisitReasons
} from 'src/redux/actions/filterDataActions'
import { updateFilter } from 'src/redux/actions/filterActions'

const mapStateToProps = state => ({
  allCities:          state.filterData.allCities ? state.filterData.allCities : [],
  allInsurances:      state.filterData.allInsurances ? state.filterData.allInsurances : [],
  allVisitReasons:    state.filterData.allVisitReasons ? state.filterData.allVisitReasons : [],
  cityValue:          state.filters.city ? state.filters.city : '',
  insuranceValue:     state.filters.insurance ? state.filters.insurance : '',
  visitReasonValue:   state.filters.reason ? state.filters.reason : '',

  value:     state.filters.location ? state.filters.location : ''
})

const mapDispatchToProps = dispatch => ({
  update: ({ filterKey, value }) => dispatch(updateFilter({
    filterKey,
    value
  })),
  fetchCities: () => dispatch( fetchCities() ),
  fetchInsurances: () => dispatch( fetchInsurances() ),
  fetchVisitReasons: () => dispatch( fetchVisitReasons() )
})

class SearchPageFilterContainer extends Component {
  static propTypes = {
    update:           PropTypes.func,
    fetchCities:      PropTypes.func,
    fetchInsurances:  PropTypes.func,
    fetchVisitReasons:  PropTypes.func
  }

  componentDidMount() {
    this.props.fetchCities(),
    this.props.fetchInsurances(),
    this.props.fetchVisitReasons()
  }

  render() {

    return (
      <div>
        <SearchPageFilterBar
          {...this.props}
        />
        <ResultsPane
          {...this.props}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageFilterContainer)
