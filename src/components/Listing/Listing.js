import React from 'react'
import PropTypes from 'prop-types'

const Listing = ({match}) => (
  <h1>{`Listing Page ${match.params.practiceId}`}</h1>
)

Listing.propTypes = {
  match: PropTypes.object
}
