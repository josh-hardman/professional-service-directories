import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex, colors, fontSize } from 'src/constants'
// import SearchDropdown from 'src/components/common/SearchDropdown'
import Backdrop from 'src/components/Backdrop'
import Card from 'src/components/Card'
import Rating from 'src/components/Rating'
import Review from 'src/components/Review'
import Tray from 'src/components/Tray'

// {match.params.id}
const FlexWrap = styled.ul`
  ${displayFlex()}
  flex-wrap: wrap;
  padding: 0;
`

const Title = styled.h3`
  color: ${colors.blue};
  font-weight: 400;
  margin: 0;
`

const Content = styled.p`
  color: ${colors.textMedium};
  ${fontSize(16)}
  font-weight: 300;
  line-height: 1.4em;
`

const VideoWrapper = styled.div`
  position:relative;
  padding-bottom:56.25%;
  padding-top:30px;
  height:0;
  overflow:hidden;
`

const Video = styled.iframe`
  margin-top: 12px;
  border: none;
  position:absolute;
  	top:0;
  	left:0;
  	width:100%;
  	height:100%;
`

const Decorators = [{
  component: ({
    position='CenterLeft',
    style={
      padding: 20
    }
  }) => (
    <button
      onClick={this.props.previousSlide}>
      Previous Slide
    </button>
  )
}]

const ListingPage = ({practice}) => (
  <Backdrop>
    {
      !practice &&
        <span>LOADING...</span>
    }
    {
      practice &&
        <FlexWrap>
          <Card width='full'>
            <Title>{practice.name}</Title>
          </Card>
          <Card width='half'>
            <Title>About Us</Title>
            <Content>{practice.about}</Content>
          </Card>
          <Card width='half'>
            <Title>Welcome Video</Title>
            <VideoWrapper>
              <Video src={practice.welcomeVideo} />
            </VideoWrapper>
          </Card>
          <Card width='full'>
            <Title>Patient Testimonials</Title>
            <Rating rating={3.5}/>
            <Tray items={practice.reviews}/>
          </Card>
        </FlexWrap>
    }
  </Backdrop>
)

ListingPage.propTypes = {
  practice: PropTypes.object
}

export default ListingPage
