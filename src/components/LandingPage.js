import React from 'react'
import Header from 'src/components/Header.js'
import LandingPageFilterContainer from 'src/containers/LandingPageFilterContainer'

import styled from 'styled-components'
import { displayFlex } from 'src/constants.js'

const StyledLanding = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  position: absolute;
  background: url('http://www.oralanswers.com/wp-content/uploads/2011/03/dentist_license_verification_all_states.jpg') no-repeat 60% 10%;
`

const IslandPosition = styled.div`
  width: 100%;
  height: 100%;
  ${displayFlex()}
  justify-content: center;
  align-items: center;
`

const LandingPage = () => (
  <StyledLanding>
    <Header
      header={'Dentto'}
      subHeader={"Discover your perfect Dentist"}
    />
    <IslandPosition>
      <LandingPageFilterContainer />
    </IslandPosition>
  </StyledLanding>
)

export default LandingPage
