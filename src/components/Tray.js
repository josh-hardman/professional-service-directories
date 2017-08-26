import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Review from 'src/components/Review'
import styled from 'styled-components'

const TrayWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const Item = styled.div`
  width: 30%;
  float: left;
`

export default class Tray extends Component {

  state = {
    index: 0,
    items: [0,1,2,3,4,5,6,7]
  }

  handleVisibleItems = () => {
    const {items, index} = this.state

    return items[index]
  }

  handleLeft = () => {
    const {items, index} = this.state

    index <= 0
      ?
        this.setState({
          index: items[items.length -1]
        })
      :
        this.setState(prevState => ({
          index: prevState.index - 1
        }))
  }

  handleRight = () => {
    const {items, index} = this.state

    index >= ( items.length -1 )
      ?
        this.setState({
          index: 0
        })
      :
        this.setState(prevState => ({
          index: prevState.index + 1
        }))
  }

  render() {

    const {items, index} = this.state

    return (
      <TrayWrapper>
        <button onClick={this.handleLeft}>left</button>
        <button onClick={this.handleRight}>right</button>
        <Item>Item {items[index]}</Item>
      </TrayWrapper>
    )
  }

  static propTypes = {

  }
}
