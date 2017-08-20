import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {colors, displayFlex} from 'src/constants'
import Checkbox from 'src/components/Checkbox'
import SearchDropdown from 'src/components/common/SearchDropdown'

// styles
const StyledToggleFilter = styled.div`
  width: 100%;
  background: ${({active}) => active ? colors.gray : 'none'};
  padding-bottom: 10px;
  padding-top: 10px;
`

const Row = styled.div`
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 8px;
  ${displayFlex()}
  justify-content: center;
  align-items: center;
`

const Rest = styled.div`
  flex-grow: 1;
  padding-left: 12px;
`

const Label = styled.h4`
  display: inline-block;
  font-weight: 400;
  color: ${colors.textMedium};
  margin: 0;
`

class ToggleFilter extends Component {

  static propTypes = {
    value:                PropTypes.string,
    onUpdate:               PropTypes.func,
    options:              PropTypes.arrayOf(
                            PropTypes.object
                          ),
    filterKey:            PropTypes.string,
    placeholder:          PropTypes.string
  }

  state = {
    active: false
  }

  handleToggle = () => this.setState( prevState => {
    prevState.active && this.props.onUpdate({
      filterKey: this.props.filterKey,
      value: ''
    })

    return {
      active: prevState.active ? false : true
    }
  })


  render() {
    const {value, onUpdate, options, filterKey, placeholder} = this.props

    const isOpen = this.state.active || !!value

    return (
      <StyledToggleFilter
        active={isOpen}
      >
        <Row>
          <Checkbox
            checked={isOpen}
            onCheck={this.handleToggle}
          />
          <Rest>
            <Label>{placeholder}</Label>
          </Rest>
        </Row>
        <Row>
          {
            isOpen &&
            <SearchDropdown
              placeholder={placeholder}
              filterKey={filterKey}
              value={value}
              onChange={onUpdate}
              options={options}
            />
          }
        </Row>
      </StyledToggleFilter>
    )
  }
}



export default ToggleFilter
