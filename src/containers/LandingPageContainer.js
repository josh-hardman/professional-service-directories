import React, { Component } from 'react'
import PropTypes from 'prop-types'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions/filterValuesActions'
import { fetchGQLData } from 'src/redux/actions/filterOptionsActions'
// child components
import LandingPageSearch from 'src/components/LandingPageSearch'
// queries
import { cities } from 'src/queries/filterOptions'

const mapStateToProps = state => ({
  city: state.filterValues.city ? state.filterValues.city : '',
  allCities: state.filterOptions.allCities ? state.filterOptions.allCities : []
})

const mapDispatchToProps = dispatch => ({
    fetchCities: () => dispatch(fetchGQLData(cities)),
    update: ({ filterKey, value }) => dispatch(updateFilter({
      filterKey,
      value
    }))
})

class SearchPageContainer extends Component {
  static propTypes = {
    city:         PropTypes.string,
    update:       PropTypes.func,
    fetchCities:  PropTypes.func,
    allCities:    PropTypes.arrayOf(
                    PropTypes.object
                  )
  }

  componentDidMount() {
    this.props.allCities.length == 0 &&
      this.props.fetchCities()
  }

  render() {
    const { city, update, allCities } = this.props

    return (
      <LandingPageSearch
        city={city}
        update={update}
        allCities={allCities}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer)
