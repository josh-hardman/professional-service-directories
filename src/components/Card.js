import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, displayFlex, shadow, breakpoints } from 'src/constants'

const CardWrapper = styled.li`
  width: 100%;
  ${displayFlex()}
  justify-content: center;
  padding: 2px;

  @media screen and (min-width: ${breakpoints._600}) {
    width: ${({width}) => {
      if( width == 'half' ) return '50%'
      else if( width == 'third' ) return '33.3333333333333%'
      else if( width == 'full' ) return '100%'
    }};
	}
`

const StyledCard = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  ${shadow()}
  width: 100%;
  max-width: 950px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 18px;
  padding-right: 18px;
`

const Card = ({width, children}) => (
  <CardWrapper width={width}>
    <StyledCard>
      {children}
    </StyledCard>
  </CardWrapper>
)

Card.propTypes = {
  width:    PropTypes.string,
  children: PropTypes.node
}

export default Card
