import React from 'react'
// child components
import FlexCenteredHV from 'src/components/FlexCenteredHV'
import SearchDropdown from 'src/components/SearchDropdown'
import Header from 'src/components/Header'
// styling
import './landing.less'

const Landing = () => (
  <div
    className='landing'
    style={{
      background: "url('http://www.oralanswers.com/wp-content/uploads/2011/03/dentist_license_verification_all_states.jpg') no-repeat 60% 10%"
    }}
    >
      <Header
        header={'Dentto'}
        subHeader={"Discover your perfect Dentist"}
      />
      <FlexCenteredHV>
        <div>
          <h1>Find Your Dentist</h1>
          <h3>Search our curated list of highly reputable dentists near you</h3>
          <SearchDropdown
            placeholder='City Name'
            options={[
              { name: 'Highland', value: 1 },
              { name: 'Orem', value: 2 },
              { name: 'Vineyard', value: 3 },
              { name: 'Pleasant Grove', value: 3 },
              { name: 'Spanish Fork', value: 3 },
              { name: 'Sandy', value: 3 },
              { name: 'Lehi', value: 3 },
              { name: 'Riverton', value: 3 },
              { name: 'Nefi', value: 3 },
              { name: 'Ogden', value: 3 },
              { name: 'Provo', value: 3 },
              { name: 'Draper', value: 3 },
            ]}
          />
        </div>
      </FlexCenteredHV>
      <div className='opacity-screen' />
  </div>
)

export default Landing
