import React, { Component } from 'react'
// redux
import { connect } from 'react-redux'
import { updateFilter } from 'src/redux/actions'

// import PropTypes from 'prop-types'
const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(updateFilter({
    name: 'location',
    value: 'Orem'
  })),
  update2: () => dispatch(updateFilter({
    name: 'location',
    value: 'Lindon'
  }))
})

class FilterContainer extends Component {
  render() {
    return (
      <div>
        <h1 onClick={this.props.update}>Filter Container</h1>
        <h1 onClick={this.props.update2}>Filter Container</h1>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)
