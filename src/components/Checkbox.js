import React from 'react'
import PropTypes from 'prop-types'
import {colors} from 'src/constants'
import styled from 'styled-components'

const StyledCheckbox = styled.div`
  width: 35px;
  height: 21px;
  position: relative;
  display: inline-block;
  background: ${colors.red};

  &input:checked + label:after {
    opacity: 1;
  }
`

const CheckboxLabel = styled.label`
  cursor: pointer;
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  left: 0;
  border: 1px solid ${colors.darkGray};
  border-radius: 3px;

  background: ${ props => props.open ? colors.highlightBlue : 'none'};

  &::after {
  	content: '';
  	position: absolute;
  	width: 14px;
  	height: 6px;
  	background: transparent;
  	top: 5px;
  	left: 4px;
  	border: 3px solid ${colors.white};
  	border-top: none;
  	border-right: none;
  	transform: rotate(-45deg);

    opacity: ${ props => props.open ? 1 : 0};
  }
`

const CheckboxInput = styled.input`
  display: none;
`

const Checkbox = ({ checked, onCheck }) => (
  <StyledCheckbox>
    <CheckboxInput type="checkbox" value="1" />
    <CheckboxLabel
      open={checked}
      onClick={onCheck}
      htmlFor="checkbox"
    />
  </StyledCheckbox>
)

Checkbox.propTypes = {
  onCheck: PropTypes.func,
  checked: PropTypes.bool
}

export default Checkbox
