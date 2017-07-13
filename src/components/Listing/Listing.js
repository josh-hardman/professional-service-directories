import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Listing extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  render() {
    const { match } = this.props
    return (
      <h1>{`Listing Page ${match.params.practiceId}`}</h1>
    )
  }
}
