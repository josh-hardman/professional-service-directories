import React from 'react'
// child components
import FlexCenteredHV from 'src/components/FlexCenteredHV'
// containers
import LandingFilterContainer from 'src/containers/LandingFilterContainer'
// styling
import './landing.less'

const Landing = () => (
  <div
    className='landing'
    style={{
      background: "url('http://www.oralanswers.com/wp-content/uploads/2011/03/dentist_license_verification_all_states.jpg') no-repeat 60% 10%"
    }}
    >
      <FlexCenteredHV>
        <LandingFilterContainer />
      </FlexCenteredHV>
      <div className='opacity-screen' />
  </div>
)

export default Landing
