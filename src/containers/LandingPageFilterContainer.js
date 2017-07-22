import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import LandingPageSearch from 'src/components/LandingPageSearch'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions/filterActions'

const mapStateToProps = state => ({
  cityValue:    state.filters.city ? state.filters.city : ''
})

const mapDispatchToProps = dispatch => ({
  update: ({ filterKey, value }) => dispatch(updateFilter({
    filterKey,
    value
  }))
})

class FilterContainer extends Component {
  static propTypes = {
    cityValue:      PropTypes.string,
    update:         PropTypes.func,
    fetchCities:    PropTypes.func
  }

  render() {
    const { cityValue, update } = this.props

    return (
      <LandingPageSearch
        cityValue={cityValue}
        update={update}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)
