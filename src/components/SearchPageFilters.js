import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FilterIcon from 'react-icons/lib/md/filter-list'
import { colors, fontSize, displayFlex, breakpoints } from 'src/constants'
import SearchDropdown from 'src/components/common/SearchDropdown'
import ToggleFilter from 'src/components/ToggleFilter'

import Media from 'react-media'

const SpacerBar = styled.div`
  width: 100%;
  height: 50px;
  ${displayFlex()}
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: ${colors.lightGray};
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
  top: 100px;
  width: 100%;
  float: left;
  padding-top: 30px;

  @media screen and (min-width: ${breakpoints._600}) {
    width: 25%;
	}

  @media screen and (min-width: ${breakpoints._960}) {
    height: 160px;
    ${'' /* ${displayFlex()}
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap; */}
	}
`

class SearchPageFilters extends Component {

  state = {
    open: true
  }

  static propTypes = {
    city:                 PropTypes.string,
    practiceType:         PropTypes.string,
    insurance:            PropTypes.string,
    allCities:            PropTypes.arrayOf(
                            PropTypes.object
                          ),
    allPracticeTypes:     PropTypes.arrayOf(
                            PropTypes.object
                          ),
    allInsurances:        PropTypes.arrayOf(
                            PropTypes.object
                          ),
    update:               PropTypes.func,
  }

  handleToggleOpen = () => this.setState( prevState => ({
    open: !prevState.open
  }))

  render() {

    const {
      city,
      practiceType,
      insurance,
      allCities=[],
      allPracticeTypes=[],
      allInsurances=[],
      update
    } = this.props

    return(
      <div>
        <Media query={{ maxWidth: breakpoints._600 }}>
          {matches => matches && (
            <SpacerBar>
              <FilterButton
                onClick={this.handleToggleOpen}
              >
                <Icon/>
                <Text>Filters</Text>
              </FilterButton>
            </SpacerBar>
          )}
        </Media>

        {/* {
          this.state.open && */}
            <Wrapper>
              <ToggleFilter
                placeholder='City Name'
                filterKey='city'
                value={city}
                onUpdate={update}
                options={allCities}
              />
              <ToggleFilter
                placeholder='Practice Type'
                filterKey='practiceType'
                value={practiceType}
                onUpdate={update}
                options={allPracticeTypes}
              />
              <ToggleFilter
                placeholder='Insurance Provider'
                filterKey='insurance'
                value={insurance}
                onUpdate={update}
                options={allInsurances}
              />
            </Wrapper>
        {/* } */}
      </div>
    )
  }
}

export default SearchPageFilters
