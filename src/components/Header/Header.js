import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './header.less'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__logo">Dentto</h1>
        {/* <ul>
          <li>
            <Link to='/'>
              Landing
            </Link>
          </li>
          <li>
            <Link to='/search'>
              Search
            </Link>
          </li>
        </ul> */}
      </div>
    )
  }
}
