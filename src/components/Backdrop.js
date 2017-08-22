import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, displayFlex, breakpoints } from 'src/constants'

const BackdropWrapper = styled.div`
  width: 100%;
  ${displayFlex()}
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 18px;
`

const StyledBackdrop = styled.div`
  background-color: ${colors.gray};
  width: 100%;
  max-width: 950px;

  @media screen and (min-width: ${breakpoints._600}) {
    padding: 18px;
	}
`

const Backdrop = ({children}) => (
  <BackdropWrapper>
    <StyledBackdrop>
      {children}
    </StyledBackdrop>
  </BackdropWrapper>
)

Backdrop.propTypes = {
  children: PropTypes.node
}

export default Backdrop
