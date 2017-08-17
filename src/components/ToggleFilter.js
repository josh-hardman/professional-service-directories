import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'src/components/Checkbox'
import SearchDropdown from 'src/components/common/SearchDropdown'

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
      <div>
        <Checkbox
          checked={this.state.active}
          onCheck={this.handleToggle}
        />
        <br></br>
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
      </div>
    )
  }
}



export default ToggleFilter
