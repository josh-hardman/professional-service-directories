import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// components
import Outline from 'react-icons/lib/md/star-outline'
import Half from 'react-icons/lib/md/star-half'
import Full from 'react-icons/lib/md/star'

const StarItem = styled.li`
  display: inline-block;
`

const Star = ({ type }) => (
  <StarItem>
    {
      type == 'full' &&
        <Full />
    }
    {
      type == 'half' &&
        <Half />
    }
    {
      type == 'outline' &&
        <Outline />
    }
  </StarItem>
)

Star.propTypes = {
  type: PropTypes.string
}

export default Star
