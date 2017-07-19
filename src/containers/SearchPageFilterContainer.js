import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import SearchPageFilterBar from 'src/components/SearchPageFilterBar'
import ResultsPane from 'src/components/ResultsPane'
// redux
import { connect } from 'react-redux'
import { fetchPractices } from 'src/redux/actions/fetchActions'
import { updateFilter } from 'src/redux/actions/filterActions'


// import PropTypes from 'prop-types'
const mapStateToProps = ({ filters: { location, insurance, reason } }) => ({
  location,
  insurance,
  reason
})

const mapDispatchToProps = dispatch => ({
  update: ({ filterKey, value }) => dispatch(updateFilter({
    filterKey,
    value
  })),
  fetchPractices: () => dispatch(fetchPractices())
})

class SearchPageFilterContainer extends Component {
  static propTypes = {
    location:       PropTypes.string,
    insurance:      PropTypes.string,
    reason:         PropTypes.string,
    update:         PropTypes.func,
    fetchPractices:  PropTypes.func
  }

  componentDidMount() {
    this.props.fetchPractices()
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
