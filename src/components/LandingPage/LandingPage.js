import React from 'react'
// child components
import FlexCenteredHV from 'src/components/FlexCenteredHV'
// containers
import LandingPageFilterContainer from 'src/containers/LandingPageFilterContainer'
// styling
import './landing.less'

const LandingPage = () => (
  <div
    className='landing'
    style={{
      background: "url('http://www.oralanswers.com/wp-content/uploads/2011/03/dentist_license_verification_all_states.jpg') no-repeat 60% 10%"
    }}
    >
      <FlexCenteredHV>
        <LandingPageFilterContainer />
      </FlexCenteredHV>
  </div>
)

export default LandingPage
