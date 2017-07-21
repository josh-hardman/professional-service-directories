import { TweenMax, Power2 } from "gsap"
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './dropdown-menu.less'

export default class SearchMenu extends Component {

  static propTypes = {
    onClickOption:  PropTypes.func.isRequired,
    options:        PropTypes.arrayOf(
                      PropTypes.shape({
                        name: PropTypes.string,
                        id: PropTypes.any
                      })
                    ).isRequired,
    selected:       PropTypes.string,
    setFocusedRef:  PropTypes.func,
    focusIndex:     PropTypes.number,
    onClickOutside: PropTypes.func
  }

  componentDidEnter() {
    document.addEventListener('click', this.props.onClickOutside)
  }

  // animation hooks
  componentWillEnter (callback) {
    TweenMax.from(
      this.node,
      0.1,
      {
        autoAlpha: 0,
        height: 0,
        ease: Power2.easeOut,
        onComplete: callback
      }
    )
  }

  componentWillLeave (callback) {
    TweenMax.to(this.node, .3, {
      autoAlpha: 0,
      height: 0,
      ease: Power2.easeOut,
      onComplete: callback
    })
    document.removeEventListener('click', this.props.onClickOutside)
  }

  render() {
    const {
      options,
      onClickOption,
      focusIndex,
      selected,
      setFocusedRef
    } = this.props

    return (
      <ul
        className='dropdown__menu'
        ref={ node => this.node = node }
      >
        {
          options.map((item, i) => (
            <li
              key={i}
              role="option"
              aria-selected={focusIndex == i}
              data-index={i}
              data-value={item.id}
              className={
                classnames({
                  'dropdown__menu-item': true,
                  'dropdown__menu-item--focused': focusIndex == i,
                  'dropdown__menu-item--selected': selected == item.id
                })
              }
              onClick={onClickOption}
              ref={focusIndex === i && setFocusedRef}
            >
              {item.name}
            </li>
          ))
        }
      </ul>
    )
  }
}
