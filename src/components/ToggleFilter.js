import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors} from 'src/constants'
import Checkbox from 'src/components/Checkbox'
import SearchDropdown from 'src/components/common/SearchDropdown'

// styles
const StyledToggleFilter = styled.div`
  width: 100%;
  background: ${colors.red};
`

const CheckboxRow = styled.div`
  width: 100%;
  padding: 12px 32px;
`

const Label = styled.h3`
  display: inline-block;
  font-weight: 400;
`

class ToggleFilter extends Component {

  static propTypes = {
    city:                 PropTypes.string,
    update:               PropTypes.func,
    allCities:            PropTypes.arrayOf(
                            PropTypes.object
                          )
  }

  state = {
    active: true
  }

  handleToggle = () => this.setState( prevState => ({
    active: prevState.active ? false : true
  }))

  render() {
    const {city, update, allCities} = this.props

    return (
      <StyledToggleFilter>
        <CheckboxRow>
          <Checkbox
            checked={this.state.active}
            onCheck={this.handleToggle}
          />
          <Label>Label</Label>
        </CheckboxRow>

        {
          this.state.active &&
            <SearchDropdown
              placeholder='City Name'
              filterKey='city'
              value={city}
              onChange={update}
              options={allCities}
            />
        }
      </StyledToggleFilter>
    )
  }
}



export default ToggleFilter
