import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
import LandingSearch from 'src/components/LandingSearch'
import SearchDropdown from 'src/components/SearchDropdown'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions'

// import PropTypes from 'prop-types'
const mapStateToProps = (state) => ({
  location: state.location
})

const mapDispatchToProps = dispatch => ({
  update: (value) => dispatch(updateFilter({
    key: 'location',
    value
  }))
})

class FilterContainer extends Component {
  static propTypes = {
    location: PropTypes.string,
    update:   PropTypes.func
  }

  render() {
    const { location, insurance, update } = this.props
    return (
      <div>
        <SearchDropdown
          placeholder='Location'
          value={location}
          onChange={update}
          options={[
            { name: 'Highland', value: '1' },
            { name: 'Orem', value: '2' },
            { name: 'Vineyard', value: '3' },
            { name: 'Pleasant Grove', value: '4' },
            { name: 'Spanish Fork', value: '5' },
            { name: 'Sandy', value: '6' },
            { name: 'Lehi', value: '7' },
            { name: 'Riverton', value: '8' },
            { name: 'Nefi', value: '9' },
            { name: 'Ogden', value: '10' },
            { name: 'Provo', value: '11' },
            { name: 'Draper', value: '12' }
          ]}
        />
        <SearchDropdown
          placeholder='Insurance Provider'
          value={insurance}
          onChange={update}
          options={[
            { name: 'Blue Cross', value: '1' },
            { name: 'Select Health', value: '2' },
            { name: 'Wonderful Health', value: '3' },
            { name: 'Blissful', value: '4' }
          ]}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)
