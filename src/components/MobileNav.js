/* global TweenMax, Power2 */
import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, fontSize, shadow } from 'src/constants'
import MenuIcon from 'react-icons/lib/md/menu'
import TransitionGroup from 'react-addons-transition-group'
import FirstChild from 'src/components/FirstChild'
// utils
import contains from 'src/utils/contains'

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
  right: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
`

const Item = styled.li`
  color: ${colors.textMedium};
  ${fontSize(14)}
  width: 100%;
  text-align: center;
  padding: 14px;
  margin-bottom: 1px;
  cursor: pointer;
  ${shadow};
  background: ${colors.white};

  &:hover {
    color: red;
    background: ${colors.lightGray};
  }
`

class DropdownList extends Component {
  componentDidEnter() {
    document.addEventListener('click', this.props.onClickOutside)
  }

  // animation hooks
  componentWillEnter (callback) {
    TweenMax.from(
      this.node,
      1,
      {
        // autoAlpha: 0,
        y: 100,
        ease: Power2.easeOut,
        onComplete: callback
      }
    )
  }

  componentWillLeave (callback) {
    TweenMax.to(this.node, 1, {
      // autoAlpha: 0,
      y: 100,
      ease: Power2.easeOut,
      onComplete: callback
    })
    document.removeEventListener('click', this.props.onClickOutside)
  }

  render() {
    return(
      <List
        ref={ node => this.node = node }
      >
        <Item>Contact</Item>
        <Item>About</Item>
      </List>
    )
  }
}

class MobileNav extends Component {
  state = {
    open: false
  }

  handleClickOutside = (e) => {
    if (!contains(this.node, e.target)) {
      this.setState({
        open: false
      })
    }
  }

  handleToggleOpen = () => this.setState( prevState => ({
    open: prevState
  }))

  render() {

    return (
      <div>
        <Button
          onClick={this.handleToggleOpen}
          isOpen={this.state.open}
        >
          <MenuIcon />
        </Button>
        <TransitionGroup component={FirstChild}>
          { this.state.open &&
            <DropdownList
              onClickOutside={this.handleClickOutside}
            />
          }
        </TransitionGroup>
      </div>
    )
  }
}

MobileNav.propTypes = {

}

export default MobileNav
