import React, { Component } from 'react'
import PropTypes from 'prop-types'
// child components
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
    return (
      <div>
        <h1>Find Your Dentist</h1>
        <h3>Search our curated list of highly reputable dentists near you</h3>
        <SearchDropdown
          placeholder='City Name'
          value={this.props.location}
          onChange={this.props.update}
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
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)
