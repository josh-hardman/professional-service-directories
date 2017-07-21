import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
// child components
import SearchDropdown from 'src/components/SearchDropdown'

const Listing = ({ location, update, allCities }) => (
  <div>
    <h1>Find Your Dentist</h1>
    <h3>Search our curated list of highly reputable dentists near you</h3>
    <SearchDropdown
      placeholder='City Name'
      filterKey='location'
      value={location}
      onChange={update}
      options={allCities}
    />
    { location &&
      <Link to='/search'>
        Search
      </Link>
    }
  </div>
)

Listing.propTypes = {
  location:     PropTypes.string,
  update:       PropTypes.func,
  allCities:    PropTypes.arrayOf(
                  PropTypes.obj
                )
}

export default Listing
