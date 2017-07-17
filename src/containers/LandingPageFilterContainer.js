import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import LandingPageSearch from 'src/components/LandingPageSearch'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions'

// import PropTypes from 'prop-types'
const mapStateToProps = (state) => ({
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  update: ({ filterKey, value }) => dispatch(updateFilter({
    filterKey,
    value
  }))
})

class FilterContainer extends Component {
  static propTypes = {
    location: PropTypes.string,
    update:   PropTypes.func
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
