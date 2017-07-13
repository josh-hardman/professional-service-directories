import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Background = styled.div`
  height: 60px;
  width: 100%;
  background: blue;
  margin: 0;
  padding: 0;
`

export default class Header extends Component {
  render() {
    return (
      <Background>
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
      </Background>
    )
  }
}
