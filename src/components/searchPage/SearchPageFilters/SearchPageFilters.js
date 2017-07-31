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

  &:hover {
    border-color: ${colors.highlightBlue};
  }

  &:hover ${Text} {
    color: ${colors.highlightBlue};
  }
`

const Icon = styled(FilterIcon)`
  display: inline-block;
  ${fontSize(24)}
  padding-right: 4px;
`

const Text = styled.span`
  ${fontSize(16)}
  vertical-align: middle;
`

const Wrapper = styled.div`
  background: ${colors.lightGray};
  padding: 10px;
  height: 160px;
  ${displayFlex()}
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

class SearchPageFilters extends Component {

  state = {
    open: true
  }

  static propTypes = {
    filterData:       PropTypes.shape({
                        allCities:        PropTypes.arrayOf(
                                            PropTypes.object
                                          ),
                        allPracticeTypes:    PropTypes.arrayOf(
                                            PropTypes.object
                                          ),
                        allVisitReasons:  PropTypes.arrayOf(
                                            PropTypes.object
                                          ),
                      }),
    practices:       PropTypes.shape({
                        allPractices:      PropTypes.arrayOf(
                                            PropTypes.object
                                          )
                      }),
    cityValue:        PropTypes.string,
    insuranceValue:   PropTypes.string,
    visitReasonValue: PropTypes.string,
    update:           PropTypes.func
  }

  handleToggleOpen = () => this.setState( prevState => ({
    open: !prevState.open
  }))

  render() {
    const {
      filterData: {
        allCities=[],
        allPracticeTypes=[],
        allVisitReasons=[]
      },
      practices: {
        allPractices=[]
      },
      cityValue,
      insuranceValue,
      visitReasonValue,
      update
    } = this.props

    return(
      <div>
        <SpacerBar>
          <span>{`${allPractices.length} Results`}</span>
          <FilterButton
            onClick={this.handleToggleOpen}
          >
            <Icon/>
            <Text>Filters</Text>
          </FilterButton>
        </SpacerBar>
        {
          this.state.open &&
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
                options={allPracticeTypes}
              />
              <SearchDropdown
                placeholder='Visit Reason'
                filterKey='reason'
                value={visitReasonValue}
                onChange={update}
                options={allVisitReasons}
              />
            </Wrapper>
        }
      </div>
    )
  }
}

export default SearchPageFilters
