import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
// child components
import SearchDropdown from 'src/components/SearchDropdown'

const Listing = ({ location, update }) => (
  <div>
    <h1>Find Your Dentist</h1>
    <h3>Search our curated list of highly reputable dentists near you</h3>
    <SearchDropdown
      placeholder='City Name'
      filterKey='location'
      value={location}
      onChange={update}
      options={[
        { name: 'Highland', value: '1' },
        { name: 'Orem', value: '2' },
        { name: 'Vineyard', value: '3' },
        { name: 'Pleasant Grove', value: '4' },
        { name: 'Spanish Fork', value: '5' },
        { name: 'Sandy', value: '6' },
        { name: 'Lehi', value: '7' },
        { name: 'Riverton', value: '8' },
        { name: 'Nefi', value: '9' },
        { name: 'Ogden', value: '10' },
        { name: 'Provo', value: '11' },
        { name: 'Draper', value: '12' }
      ]}
    />
    { location &&
      <Link to='/search'>
        Search
      </Link>
    }
  </div>
)

Listing.propTypes = {
  location: PropTypes.string,
  update:   PropTypes.func
}

export default Listing
