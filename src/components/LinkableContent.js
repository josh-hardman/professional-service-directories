import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  fontSize,
  colors
} from 'src/constants'

const Link = styled.a`
  ${fontSize(12)}
  color: ${colors.textDark};
  text-decoration: none;

  &:visited {
    color: ${colors.textDark};
  }
`

const StyledIcon = styled.span`
  ${ props => fontSize(props.iconSize)}
  color: ${colors.blue};
  padding-right: 8px;
`

const LinkableContent = ({ Icon, iconSize=18, href, text }) => (
  <li>
    <Link
      href={href ? href : 'javascript:void(0);'}
      target="_blank"
    >
      <StyledIcon iconSize={iconSize}>
        <Icon/>
      </StyledIcon>
      {text}
    </Link>
  </li>
)

LinkableContent.propTypes = {
  Icon:     PropTypes.func,
  iconSize: PropTypes.number,
  href:     PropTypes.string,
  text:     PropTypes.string,
  link:     PropTypes.bool
}

export default LinkableContent
