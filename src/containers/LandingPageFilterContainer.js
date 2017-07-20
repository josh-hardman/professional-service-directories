import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import LandingPageSearch from 'src/components/LandingPageSearch'
// redux
import { connect } from 'react-redux'
import { updateFilter, fetchCities } from 'src/redux/actions/filterActions'

// import PropTypes from 'prop-types'
const mapStateToProps = () => ({

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
    location:         PropTypes.string,
    update:           PropTypes.func,
    fetchCities:  PropTypes.func
  }

  componentDidMount() {
    this.props.fetchCities()
  }

  render() {
    const { location, update } = this.props
    return (
      <LandingPageSearch
        location={location}
        update={update}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)
