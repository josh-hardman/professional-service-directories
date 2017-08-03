import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import SearchPageGQLContainer from 'src/containers/SearchPageGQLContainer'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions/filterActions'

const mapStateToProps = state => ({
  cityValue:          state.filters.city ? state.filters.city : '',
  practiceTypeValue:     state.filters.practiceType ? state.filters.practiceType : '',
  visitReasonValue:   state.filters.reason ? state.filters.reason : ''
})

const mapDispatchToProps = (dispatch) => ({
  update: ({ filterKey, value }) => dispatch(updateFilter({
    filterKey,
    value
  }))
})

class SearchPageFilterOptions extends Component {
  static propTypes = {
    update:             PropTypes.func,
    cityValue:          PropTypes.string,
    practiceTypeValue:     PropTypes.string,
    visitReasonValue:   PropTypes.string
  }

  render() {

    return (
      <SearchPageGQLContainer
        {...this.props}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageFilterOptions)
