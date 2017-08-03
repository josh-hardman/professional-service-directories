import { Component, Children } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class FilterDataContainer extends Component {
  static propTypes = {
    filterData: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  static childContextTypes = {
    filterData: PropTypes.object.isRequired
  }

  getChildContext() {
   const { filterData } = this.props
   return { filterData }
  }

  render() {
    return Children.only(this.props.children)
  }
}

export default graphql(
  gql`
    query {
      allCities {
        name,
        id
      },
      allPracticeTypes {
        name,
        id
      },
      allVisitReasons {
        name,
        id
      }
    }
  `,
  {
    name: "filterData"
  }
)(FilterDataContainer)
