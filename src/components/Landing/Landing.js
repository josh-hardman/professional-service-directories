import React from 'react'
import FlexCenteredHV from 'src/components/FlexCenteredHV'
import SearchDropdown from 'src/components/SearchDropdown'
import './landing.less'

const Landing = () => (
  <div
    className='landing'
    style={{
      background: "url('http://www.oralanswers.com/wp-content/uploads/2011/03/dentist_license_verification_all_states.jpg') no-repeat 60% 10%"
    }}
    >
      <FlexCenteredHV>
        <div>
          <h1>Find Your Dentist</h1>
          <h3>Search our curated list of highly reputable dentists near you</h3>
          <SearchDropdown
            options={[
              { name: 'test', value: 1 },
              { name: 'thing', value: 2 },
              { name: 'dudad', value: 3 },
            ]}
            // options:     PropTypes.arrayOf(
            //                 PropTypes.shape({
            //                   name: PropTypes.string,
            //                   value: PropTypes.any
            //                 })
            //               ).isRequired,
          />
        </div>
      </FlexCenteredHV>
      <div className='opacity-screen' />
  </div>
)

export default Landing
