import React from 'react'
import PropTypes from 'prop-types'
import './flex-centered-hv.less'

const FlexCenteredHV = ({children}) => (
    <div className='flex-centered-hv'>
      {children}
    </div>
)

FlexCenteredHV.propTypes = {
  children: PropTypes.node
}

export default FlexCenteredHV
