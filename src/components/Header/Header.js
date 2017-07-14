import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './header.less'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__baseline">
          <h1 className="header__baseline__logo">Dentto</h1>
          <p className="header__baseline__description">Discover your perfect dentist.</p>
        </div>
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
