import React, { Component } from 'react'
import PropTypes from 'prop-types'
// redux
import { connect } from 'react-redux'
import { fetchPracticeById } from 'src/redux/actions/listingActions'
// components
import ListingPage from 'src/components/ListingPage'

const mapStateToProps = ({practice}) => ({
  practiceData: practice.Practice
})

const mapDispatchToProps = (dispatch) => {

  return {
    fetchPractice: (practiceId) => dispatch(
      fetchPracticeById(practiceId)
    )
  }
}

class ListingPageContainer extends Component {
  static propTypes = {
    fetchPractice: PropTypes.func
  }

  componentDidMount() {
    const practiceId = this.props.match.params.id

    this.props.fetchPractice(practiceId)
  }

  render() {
    const { practiceData } = this.props

    return (
      <ListingPage
        practice={practiceData}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingPageContainer)
