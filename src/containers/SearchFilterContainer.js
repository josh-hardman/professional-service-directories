import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import LandingSearch from 'src/components/LandingSearch'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions'

// import PropTypes from 'prop-types'
const mapStateToProps = (state) => ({
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  update: (value) => dispatch(updateFilter({
    key: 'location',
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
      <LandingSearch
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
