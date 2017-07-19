import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import SearchPageFilterBar from 'src/components/SearchPageFilterBar'
import ResultsPane from 'src/components/ResultsPane'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions'

// import PropTypes from 'prop-types'
const mapStateToProps = ({ location, insurance, reason }) => ({
  location,
  insurance,
  reason
})

const mapDispatchToProps = dispatch => ({
  update: ({ filterKey, value }) => dispatch(updateFilter({
    filterKey,
    value
  }))
})

class SearchPageFilterContainer extends Component {
  static propTypes = {
    location:   PropTypes.string,
    insurance:  PropTypes.string,
    reason:     PropTypes.string,
    update:     PropTypes.func
  }

  render() {

    return (
      <div>
        <SearchPageFilterBar
          {...this.props}
        />
        <ResultsPane
          {...this.props}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageFilterContainer)
