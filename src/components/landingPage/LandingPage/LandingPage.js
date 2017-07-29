import React from 'react'
import PropTypes from 'prop-types'
import LandingPageSearch from 'src/components/landingPage/LandingPageSearch'
import {
  Background,
  IslandPosition
} from './styles.js'

const LandingPage = ({cityValue, update}) => (
  <Background>
    <IslandPosition>
      <LandingPageSearch
        cityValue={cityValue}
        update={update}
      />
    </IslandPosition>
  </Background>
)

LandingPage.propTypes = {
  cityValue:  PropTypes.string,
  update:     PropTypes.func
}

export default LandingPage
