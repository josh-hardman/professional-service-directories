import React from 'react'
import PropTypes from 'prop-types'
// child components
import SearchDropdown from 'src/components/SearchDropdown'
import './search-page-filter-bar.less'

const SearchPageFilterBar = ({ location, insurance, update, reason }) => (
  <div className='search-page-filter-bar'>
    <div className='search-page-filter-bar__wrapper'>
      <div className='search-page-filter-bar__wrapper__filter'>
        <SearchDropdown
          placeholder='Location'
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
      </div>
      <div className='search-page-filter-bar__wrapper__filter'>
        <SearchDropdown
          placeholder='Insurance Provider'
          filterKey='insurance'
          value={insurance}
          onChange={update}
          options={[
            { name: 'Blue Cross', value: '1' },
            { name: 'Select Health', value: '2' },
            { name: 'Wonderful Health', value: '3' },
            { name: 'Blissful', value: '4' }
          ]}
        />
      </div>
      <div className='search-page-filter-bar__wrapper__filter'>
        <SearchDropdown
          placeholder='Reason for Visit'
          filterKey='reason'
          value={reason}
          onChange={update}
          options={[
            { name: 'Tooth Ache', value: '1' },
            { name: 'Cleaning', value: '2' },
            { name: 'Standard Checkup', value: '3' },
            { name: 'Root Canal', value: '4' }
          ]}
        />
      </div>
    </div>
  </div>
)

SearchPageFilterBar.propTypes = {
  location: PropTypes.string,
  insurance: PropTypes.string,
  reason: PropTypes.string,
  update:   PropTypes.func
}

export default SearchPageFilterBar
