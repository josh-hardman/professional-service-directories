import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './header.less'

const HeaderLink = ({link}) => (
  <li>
    <Link to={link.path}>
      {link.name}
    </Link>
  </li>
)

HeaderLink.propTypes = {
  link: PropTypes.object
}

const Header = ({ header, bgColor, subHeader, links }, context) => (
  <div className="header" style={{background: bgColor}}>
    <div className="header__baseline">
      <h1 className="header__baseline__logo">{`${header} ${context.color}`}</h1>
      <p className="header__baseline__description">{subHeader}</p>
    </div>
    <ul>
      { links && links.map( (link, i) =>
        <HeaderLink
          key={i}
          link={link}
        />
      ) }
    </ul>
  </div>
)

Header.contextTypes = {
  color: PropTypes.string
}

Header.propTypes = {
  bgColor:    PropTypes.string,
  header:     PropTypes.string,
  subHeader:  PropTypes.string
}

export default Header
