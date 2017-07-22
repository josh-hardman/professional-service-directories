import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import styled from 'styled-components'
import { colors, fontSize, breakpoints } from 'src/constants'

const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  background: ${colors.blue};
`

const Baseline = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  display: flex;
  align-items: baseline;
`

const Logo = styled.h1`
  margin: 0;
  padding-left: 36px;
  color: ${colors.white};
  display: inline-block;
  font-weight: bold;
  ${fontSize(35)};
`

const CatchPhrase = styled.p`
  margin: 0;
  padding-left: 12px;
  color: ${colors.white};
  display: inline-block;
  font-weight: 100;
  ${fontSize(16)};
`

const NavBar = styled.ul`
  display: none;

  @media (min-width: ${breakpoints._600}) {
    display: block;
    position: absolute;
    margin: 0;
    padding: 0;
    right: 0;
    text-align: right;
    list-style: none;
    line-height: 36px;
	}
`

const NavItem = styled.li`
  text-decoration: none;
  color: ${colors.white};
  ${fontSize(18)};
  font-weight: 200;
  float: right;
  padding: 8px;
  padding-right: 40px;

  &:hover {
    color: ${colors.red};
    cursor: pointer;
  }
`

const Header = ({ header, subHeader }) => (
  <StyledHeader>
    <Baseline>
      <Logo>{`${header}`}</Logo>
      <CatchPhrase>{subHeader}</CatchPhrase>
      <NavBar>
        <NavItem>
          <Link to='/about'>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/contact'>
            Contact
          </Link>
        </NavItem>
      </NavBar>
    </Baseline>
  </StyledHeader>
)

Header.propTypes = {
  bgColor:    PropTypes.string,
  header:     PropTypes.string,
  subHeader:  PropTypes.string
}

export default Header
