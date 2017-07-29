import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import LandingPage from 'src/components/landingPage/LandingPage'
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
    return (
      <LandingPage {...this.props}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)
