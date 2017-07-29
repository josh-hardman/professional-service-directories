import React from 'react'
import LandingPageFilterContainer from 'src/containers/LandingPageFilterContainer'

import styled from 'styled-components'
import { displayFlex } from 'src/constants.js'

const StyledLanding = styled.div`

  &:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  z-index: -1;
  background: url('http://2oseib2jk7sm2ch5uy3ibuss.wpengine.netdna-cdn.com/wp-content/uploads/2015/08/TheDentistTakesCareofMyTeeth.jpg') no-repeat 50% 0%;
}
`

const IslandPosition = styled.div`
  position: absolute;
  top: 50px;
  height: 50%;
  left: 0;
  right: 0;
  ${ displayFlex() }
  justify-content: center;
  align-items: center;
  z-index: -1;
`

const LandingPage = () => (
  <StyledLanding>
    <IslandPosition>
      <LandingPageFilterContainer />
    </IslandPosition>
  </StyledLanding>
)

export default LandingPage
