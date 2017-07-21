import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import LandingPageSearch from 'src/components/LandingPageSearch'
// redux
import { connect } from 'react-redux'
import { fetchCities } from 'src/redux/actions/filterDataActions'
import { updateFilter } from 'src/redux/actions/filterActions'

const mapStateToProps = state => ({
  allCities:    state.filterData.allCities ? state.filterData.allCities : [],
  cityValue:    state.filters.city ? state.filters.city : ''
})

const mapDispatchToProps = dispatch => ({
  update: ({ filterKey, value }) => dispatch(updateFilter({
    filterKey,
    value
  })),
  fetchCities: () => dispatch( fetchCities() )
})

class FilterContainer extends Component {
  static propTypes = {
    cityValue:      PropTypes.string,
    allCities:      PropTypes.arrayOf(
                      PropTypes.object
                    ),
    update:         PropTypes.func,
    fetchCities:    PropTypes.func
  }

  componentDidMount() {
    this.props.fetchCities()
  }

  render() {
    const { cityValue, update, allCities } = this.props

    return (
      <LandingPageSearch
        allCities={allCities}
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
