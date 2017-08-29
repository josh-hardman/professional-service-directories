import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Review from 'src/components/Review'
import styled from 'styled-components'
import ReactSwipe from 'react-swipe'

const TrayWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const Item = styled.div`
  width: 30%;
  float: left;
`

const ReviewAnimation = styled.div`
  transition: all 3s;
`

export default class Tray extends Component {

  state = {
    index: 0,
    items: this.props.items
  }

  handleVisibleItems = () => {
    const {index, items} = this.state

    return [items[index]]
  }

  handleLeft = () => {
    this.slideshow.prev()
  }

  handleRight = () => {
    this.slideshow.next()
  }

  render() {

    const {items, index, } = this.state

    return (
      <div>
        <button onClick={this.handleRight}>Next</button>
        <button onClick={this.handleLeft}>Previous</button>
        <ReactSwipe ref={ node => this.slideshow = node } swipeOptions={{continuous: true}}>
          {/* <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div> */}
            {items.map((item, i) => (
              <div key={i}>
                <Review
                  name={item.name}
                  review={item.review}
                  rating={item.rating}
                />
              </div>
            ))}
        </ReactSwipe>
      </div>
    )
  }

  static propTypes = {

  }
}
