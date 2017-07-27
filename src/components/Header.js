import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Media from 'react-media'
import styled from 'styled-components'
import { colors, fontSize, breakpoints } from 'src/constants'

import MobileNav from 'src/components/MobileNav.js'
import DesktopNav from 'src/components/DesktopNav.js'

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  background: ${colors.blue};
  z-index: 10;
  transition: all .2s;

  @media (min-width: ${breakpoints._600}) {
    height: 60px;
	}
`

const Baseline = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 8px;
  display: flex;
  align-items: baseline;
  transition: all .2s;

  @media (min-width: ${breakpoints._600}) {
    padding-top: 12px;
	}
`

const Logo = styled.h1`
  margin: 0;
  padding-left: 18px;
  color: ${colors.white};
  display: inline-block;
  font-weight: bold;
  ${fontSize(24)};
  transition: all .2s;

  @media (min-width: ${breakpoints._600}) {
    ${fontSize(35)};
    padding-left: 36px;
	}
`

const CatchPhrase = styled.p`
  margin: 0;
  padding-left: 12px;
  color: ${colors.white};
  display: inline-block;
  font-weight: 100;
  ${fontSize(12)};
  transition: all .2s;

  @media (min-width: ${breakpoints._600}) {
    ${fontSize(16)};
	}
`

const Header = ({ header, subHeader }) => (
  <StyledHeader>
    <Baseline>
      <Link to='/'>
        <Logo>{`${header}`}</Logo>
      </Link>
      <CatchPhrase>{subHeader}</CatchPhrase>
      <Media query={{ minWidth: breakpoints._600} }>
        {matches => matches ? (
          <DesktopNav />
        ) : (
          <MobileNav />
        )}
      </Media>
    </Baseline>
  </StyledHeader>
)

Header.propTypes = {
  bgColor:    PropTypes.string,
  header:     PropTypes.string,
  subHeader:  PropTypes.string
}

export default Header
