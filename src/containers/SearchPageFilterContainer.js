import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import SearchPageFilterBar from 'src/components/SearchPageFilterBar'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions'

// import PropTypes from 'prop-types'
const mapStateToProps = (state) => ({
  location: state.location,
  insurance: state.insurance
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
    insurance: PropTypes.string,
    update:   PropTypes.func
  }

  render() {
    const { location, insurance, update } = this.props

    return (
      <div>
        <SearchPageFilterBar
          location={location}
          insurance={insurance}
          update={update}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)
