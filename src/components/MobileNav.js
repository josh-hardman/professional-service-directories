import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, fontSize, shadow } from 'src/constants'
import MenuIcon from 'react-icons/lib/md/menu'

const Button = styled.button`
  position: absolute;
  z-index: 100;
  margin: 0;
  padding-right: 8px;
  top: 0;
  bottom: 0;
  right: 0;
  text-align: right;
  list-style: none;
  line-height: 36px;
  background: none;
  border: none;
  color: ${props => props.isOpen? colors.red : colors.white};
  ${fontSize(34)}

`

const List = styled.ul`
  position: absolute;
  top: 50px;
  height: 30%;
  right: 0;
  width: 50%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  color: ${colors.textMedium};
  ${fontSize(14)}
  width: 100%;
  text-align: center;
  padding: 12px;
  margin-bottom: 1px;
  cursor: pointer;
  ${shadow};
  background: ${colors.white};

  &:hover {
    color: red;
    background: ${colors.lightGray};
  }
`

class MobileNav extends Component {
  state = {
    open: false
  }

  handleToggleOpen = () => this.setState({
    open: this.state.open ? false : true
  })

  render() {

    return (
      <div>
        <Button
          onClick={this.handleToggleOpen}
          isOpen={this.state.open}
        >
          <MenuIcon />
        </Button>
        { this.state.open &&
          <List>
            <Item>Contact</Item>
            <Item>About</Item>
          </List>
        }
      </div>
    )
  }
}

MobileNav.propTypes = {

}

export default MobileNav
