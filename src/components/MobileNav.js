import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, fontSize, shadow } from 'src/constants'
import MenuIcon from 'react-icons/lib/md/menu'

const Button = styled.button`
  position: absolute;
  margin: 0;
  padding-right: 8px;
  top: 0;
  height: 100%;
  right: 0;
  text-align: right;
  list-style: none;
  line-height: 36px;
  background: none;
  border: none;
  color: ${colors.white};
  ${fontSize(24)}

  &:hover {
    color: red;
    cursor: pointer;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 40px;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${colors.transparentGrey};
`

const List = styled.ul`
  height: 30%;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  color: ${colors.textMedium};
  ${fontSize(18)}
  width: 100%;
  text-align: center;
  padding: 20px;
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
        >
          <MenuIcon />
        </Button>
        { this.state.open &&
          <Overlay>
            <List>
              <Item>Contact</Item>
              <Item>About</Item>
            </List>
          </Overlay>
        }
      </div>
    )
  }
}

MobileNav.propTypes = {

}

export default MobileNav
