const StyledScheduleBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.white};
  ${shadow()}
  ${displayFlex()}
`
const Slot = styled.div`
  flex: 1;
  border: 1px solid red;
`


<StyledScheduleBar>
  <Slot>
    <SearchDropdown
      placeholder='City Name'
      filterKey='city'
      value={'test'}
      onChange={()=>console.log('click')}
      options={[{name:'test', value: 1}]}
    />
  </Slot>
  <Slot>
    <SearchDropdown
      placeholder='City Name'
      filterKey='city'
      value={'test'}
      onChange={()=>console.log('click')}
      options={[{name:'test', value: 1}]}
    />
  </Slot>
  <Slot>
    <SearchDropdown
      placeholder='City Name'
      filterKey='city'
      value={'test'}
      onChange={()=>console.log('click')}
      options={[{name:'test', value: 1}]}
    />
  </Slot>
  <Slot>
    <SearchDropdown
      placeholder='City Name'
      filterKey='city'
      value={'test'}
      onChange={()=>console.log('click')}
      options={[{name:'test', value: 1}]}
    />
  </Slot>
</StyledScheduleBar>
