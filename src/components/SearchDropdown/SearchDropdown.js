import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TransitionGroup from 'react-addons-transition-group'
import FirstChild from 'src/components/FirstChild'
import SearchMenu from './SearchMenu'
// import Icon from 'common/components/Icon'
// utils
import classnames from 'classnames'
import contains from 'src/utils/contains'
import v4 from 'uuid'

// styles
import './search-dropdown.less'

class SearchDropdown extends Component {

  state = {
    searchText: '',
    searching: false,
    focused: false,
    focusIndex: 0
  }

  static propTypes = {
    placeholder: PropTypes.string,
    options:     PropTypes.arrayOf(
                    PropTypes.shape({
                      name: PropTypes.string,
                      value: PropTypes.any
                    })
                  ).isRequired,
    value:        PropTypes.string,
    onChange:     PropTypes.func,
    disabled:     PropTypes.bool
  }

  getSelectedOptionName = () => {
    const { options, value } = this.props
    const selectedOption = options.find( opt => opt.value === value )
    return selectedOption ? selectedOption.name : ''
  }

  getDisplayValue = () => {
    const { searching, searchText } = this.state

    return searching
      ? searchText
      : this.getSelectedOptionName()
  }

  getFilteredOptions = () => {
    const { searchText } = this.state
    const { options } = this.props

    if (!searchText) { return options }

    let regx = new RegExp(searchText, 'i')
    return options.filter( opt => regx.test(opt.name))
  }

  handleSearchChange = (e) => {
    this.props.onChange('')
    this.setState({
      searchText: e.target.value,
      searching: true,
      focusIndex: 0
    })
  }

  openMenu = () => {
    this.setState({
      focused: true,
      focusIndex: 0
     })
    setTimeout(() => this.searchField.select(), 0)
  }

  onClickOption = (e) => {
    const value = e.target.getAttribute('data-value')

    this.props.onChange(value)

    this.setState({
      searchText: '',
      searching: false,
      focused: false,
      focusIndex: 0
    })
  }

  incrementFocusIndex = () => {
    this.state.focusIndex < this.getFilteredOptions().length - 1 &&
      this.setState(
        prevState => ({ focusIndex: prevState.focusIndex + 1 }),
        () => this.makeFocusedOptionVisible()
      )
  }

  decrementFocusIndex = () => {
    this.state.focusIndex > 0 &&
      this.setState(
        prevState => ({ focusIndex: prevState.focusIndex - 1 }),
        () => this.makeFocusedOptionVisible()
      )
  }

  getValueByFocusIndex = () => {
    const options = this.getFilteredOptions()

    const option = options.find( (option, i) => (
      i == this.state.focusIndex
    ))

    return option.value
  }

  handleKeyDown = (e) => {
    const { focused } = this.state

    !focused  &&
      this.openMenu()

    //up
    if (e.keyCode === 40) {
      e.preventDefault()
      this.incrementFocusIndex()
    }

    //down
    if (e.keyCode === 38) {
      e.preventDefault()
      this.decrementFocusIndex()
    }

    //tab
    if (e.keyCode === 9) {
      this.setState({
        searchText: '',
        searching: false,
        focused: false,
      })
    }

    //enter
    if (e.keyCode === 13) {
      e.preventDefault()

      if (focused) {
        this.props.onChange( this.getValueByFocusIndex() )
        this.setState({
          searchText: '',
          searching: false,
          focused: false,
        })
      } else {
        this.openMenu()
      }
    }
  }

  handleClickOutside = (e) => {
    if (!contains(this.node, e.target)) {
      this.setState({
        searchText: '',
        searching: false,
        focused: false,
      })
    }
  }

  setFocusedRef = node => this.focusedOption = node

  makeFocusedOptionVisible = () => {
    let opt = this.focusedOption

    if (opt) {
      let parentTop = opt.parentNode.scrollTop
      let elTop = opt.offsetTop
      let elHeight = opt.offsetHeight

      if (elTop > opt.parentNode.offsetHeight + parentTop) {
        opt.parentNode.scrollTop += elHeight
      } else if (parentTop >= elTop + elHeight) {
        opt.parentNode.scrollTop -= elHeight
      }
    }
  }

  searchDropdownId = v4()

  render () {
    const options = this.getFilteredOptions()
    const { value, placeholder, disabled } = this.props
    const { focused, focusIndex } = this.state
    return (
      <div
        onFocus={this.openMenu}
        onKeyDown={this.handleKeyDown}
        className='search-dropdown'
        ref={ node => this.node = node }
      >
        {/* <span
          className={
            classnames({
              'search-dropdown__arrow': true,
              'search-dropdown--active': focused
            })
          }
        >
          <Icon icon="down_arrow" color="grey" size={12} />
        </span> */}
        <input
          onChange={this.handleSearchChange}
          className={
            classnames({
              'sys-field': true,
              'sys-field--large': true
            })
          }
          disabled={disabled}
          placeholder={placeholder}
          ref={ node => this.searchField = node }
          value={this.getDisplayValue()}
        />
        <TransitionGroup component={FirstChild}>
          {
            focused &&
            <SearchMenu
              onClickOutside={this.handleClickOutside}
              options={options}
              onClickOption={this.onClickOption}
              focusIndex={focusIndex}
              selected={value}
              setFocusedRef={this.setFocusedRef}
            />
          }
        </TransitionGroup>
      </div>
    )
  }
}

export default SearchDropdown
