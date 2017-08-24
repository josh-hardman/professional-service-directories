import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Review from 'src/components/Review'
import styled from 'styled-components'
import {displayFlex} from 'src/constants'

const TrayWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

export default class Tray extends Component {
  static propTypes = {

  }

  render() {

    return (
      <TrayWrapper>
        <Review />
        <Review />
        <Review />
        <Review />
      </TrayWrapper>
    )
  }
}
