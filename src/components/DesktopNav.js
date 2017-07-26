import React from 'react'
import styled from 'styled-components'
import { colors, fontSize } from 'src/constants'

const NavBar = styled.ul`
  display: block;
  position: absolute;
  margin: 0;
  padding: 0;
  right: 0;
  text-align: right;
  list-style: none;
  line-height: 36px;
`

const NavItem = styled.li`
  color: ${colors.white};
  ${fontSize(18)};
  font-weight: 200;
  float: right;
  padding: 8px;
  padding-right: 40px;

  &:visited {
    color: ${colors.white}
  }

  &:hover {
    color: ${colors.red};
    cursor: pointer;
  }
`

const DesktopNav = () => (
  <NavBar>
    <NavItem>
      Contact2
    </NavItem>
    <NavItem>
      About
    </NavItem>
  </NavBar>
)

DesktopNav.propTypes = {

}

export default DesktopNav
