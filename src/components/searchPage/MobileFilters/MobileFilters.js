import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FilterIcon from 'react-icons/lib/md/filter-list'
import { colors, fontSize, displayFlex } from 'src/constants'
import SearchDropdown from 'src/components/common/SearchDropdown'

const SpacerBar = styled.div`
  width: 100%;
  height: 50px;
  ${displayFlex()}
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: ${colors.lightGray}
`

const FilterButton = styled.button`
  background: none;
  border: 1px solid ${colors.textDark};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  ${fontSize(14)}

  &:hover {
    border-color: ${colors.highlightBlue};
  }

  &:hover ${Text} {
    color: ${colors.highlightBlue};
  }
`

const Icon = styled(FilterIcon)`
  display: inline-block;
  ${fontSize(20)}
  padding-right: 4px;
`

const Text = styled.span`
  ${fontSize(14)}
  vertical-align: middle;
`

const Wrapper = styled.div`
  background: ${colors.darkGray};
  padding: 10px;
  height: 200px;
  ${displayFlex()}
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

class Filters extends Component {

  state = {
    open: false
  }

  static propTypes = {
    data:             PropTypes.shape({
                        allCities:        PropTypes.arrayOf(
                                            PropTypes.object
                                          ),
                        allInsurances:    PropTypes.arrayOf(
                                            PropTypes.object
                                          ),
                        allVisitReasons:  PropTypes.arrayOf(
                                            PropTypes.object
                                          ),
                      }).required,
    cityValue:        PropTypes.string,
    insuranceValue:   PropTypes.string,
    visitReasonValue: PropTypes.string,
    update:           PropTypes.func
  }

  handleToggleOpen = () => this.setState( prevState => ({
    open: prevState
  }))

  render() {
    const {
       data: {
         allCities=[],
         allInsurances=[],
         allVisitReasons=[]
      },
      cityValue,
      insuranceValue,
      visitReasonValue,
      update
    } = this.props

    return(
      <div>
        <SpacerBar>
          <span>5 Results</span>
          <FilterButton
            onClick={this.handleToggleOpen}
          >
            <Icon />
            <Text>Filters</Text>
          </FilterButton>
        </SpacerBar>
        <Wrapper>
          <SearchDropdown
            placeholder='City Name'
            filterKey='city'
            value={cityValue}
            onChange={update}
            options={allCities}
          />
          <SearchDropdown
            placeholder='Insurance Provider'
            filterKey='insurance'
            value={insuranceValue}
            onChange={update}
            options={allInsurances}
          />
          <SearchDropdown
            placeholder='Visit Reason'
            filterKey='reason'
            value={visitReasonValue}
            onChange={update}
            options={allVisitReasons}
          />
        </Wrapper>
      </div>
    )
  }
}

export default Filters
