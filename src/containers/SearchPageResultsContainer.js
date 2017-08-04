import React, { Component } from 'react'
import PropTypes from 'prop-types'
// redux
import { connect } from 'react-redux'
import { fetchGQLData } from 'src/redux/actions/resultsActions'
// components
import ResultList from 'src/components/ResultList'

const mapStateToProps = ({
  results: {
    allPractices
  },
  filterValues: {
    city,
    practiceType,
    insurance
  }
}) => ({
  results: allPractices ? allPractices : [],
  city: city,
  practiceType: practiceType,
  insurance: insurance
})

const mapDispatchToProps = (dispatch) => {

  return {
    fetchPractices: ({ city, insurance, practiceType }) => dispatch(
      fetchGQLData({ city, insurance, practiceType })
    )
  }
}

class SearchPageResultsContainer extends Component {
  static propTypes = {
    fetchPractices: PropTypes.func,
    city:           PropTypes.string,
    insurance:      PropTypes.string,
    practiceType:   PropTypes.string,
    results:        PropTypes.arrayOf(
                      PropTypes.object
                    ).isRequired
  }

  componentDidUpdate(prevProps) {
    const { city, insurance, practiceType } = this.props
    if( prevProps.city != city
          || prevProps.insurance != insurance
          || prevProps.practiceType != practiceType
    ) {
      this.props.fetchPractices({ city, insurance, practiceType })
    }
  }

  componentDidMount() {
    const { city, insurance, practiceType } = this.props
    this.props.fetchPractices({ city, insurance, practiceType })
  }

  render() {
    const { results } = this.props

    return (
      <ResultList
        results={results}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageResultsContainer)
