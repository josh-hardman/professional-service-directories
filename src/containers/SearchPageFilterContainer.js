import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import SearchPageWrapper from 'src/components/SearchPageWrapper'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions/filterActions'

const mapStateToProps = state => ({
  cityValue:          state.filters.city ? state.filters.city : '',
  insuranceValue:     state.filters.insurance ? state.filters.insurance : '',
  visitReasonValue:   state.filters.reason ? state.filters.reason : ''
})

const mapDispatchToProps = (dispatch) => ({
  update: ({ filterKey, value }) => dispatch(updateFilter({
    filterKey,
    value
  }))
})

class SearchPageFilterContainer extends Component {
  static propTypes = {
    update:             PropTypes.func,
    cityValue:          PropTypes.string,
    insuranceValue:     PropTypes.string,
    visitReasonValue:   PropTypes.string
  }

  render() {

    return (
      <SearchPageWrapper
        {...this.props}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageFilterContainer)
