import React from 'react'
import PropTypes from 'prop-types'

const ListingPage = ({match}) => (
  <h1>ListingPage {match.params.id}</h1>
)

ListingPage.propTypes = {
  match: PropTypes.object
}

export default ListingPage
