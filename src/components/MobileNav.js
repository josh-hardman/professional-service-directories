import React, { Component } from 'react'
import styled from 'styled-components'
import { fontSize } from 'src/constants'

const Button = styled.ul`
  display: block;
  position: absolute;
  margin: 0;
  padding: 0;
  right: 0;
  text-align: right;
  list-style: none;
  line-height: 36px;
  ${fontSize(48)}

  &:hover {
    color: red;
    cursor: pointer;
  }
`

class MobileNav extends Component {
  state = {
    open: false
  }

  render() {

    return (
      <Button>=</Button>
    )
  }
}

MobileNav.propTypes = {

}

export default MobileNav
