import React, {Component} from 'react'

export default class Listing extends Component {
  render() {
    const { match } = this.props
    return (
      <h1>{`Listing Page ${match.params.practiceId}`}</h1>
    )
  }
}
