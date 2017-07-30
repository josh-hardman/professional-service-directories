import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  shadow,
  // displayFlex,
  // fontSize
} from 'src/constants'

const Card = styled.li`
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  ${ shadow }
`
//
// const InfoSection = styled.div`
//   width: 100%;
//   height: 160px;
//   padding: 12px;
//   border: 1px solid teal;
//   ${ displayFlex() };
//   justify-content: space-around;
// `
//
// const Image = styled.div`
//   flex: 1;
//   height: 140px;
//   border: 1px solid grey;
// `
//
// const Info = styled.div`
//   flex: 2;
//   width: 140px;
//   height: 140px;
//   border: 1px solid green;
//   padding: 120px;
// `
//
// const PracticeName = styled.h1`
//   width: 100%;
//   margin: 0;
//   ${ fontSize(18) }
// `
//
// const Rating = styled.p`
//   width: 100%;
//   margin: 0;
//   ${ fontSize(12) }
// `
//
// const Social = styled.ul`
//   list-style: none;
//   padding: 0;
//   ${ fontSize(12) }
// `
//
// const MediaLink = styled.li`
//
// `

const ResultCard = ({ name, rating }) => (
  <Card>
    <h4>{name}</h4>
    <h4>{rating}</h4>
    {/* <InfoSection>
      <Image />
      <Info>
        <PracticeName>{name}</PracticeName>
        <Rating>ratingz: {rating ? rating : 'N/A'}</Rating>
        { social &&
          <Social>
            <MediaLink>{social.website}</MediaLink>
          </Social>
        }
      </Info>
    </InfoSection> */}
  </Card>
)

ResultCard.propTypes = {
  name:   PropTypes.string,
  rating: PropTypes.number,
  social: PropTypes.object
}

export default ResultCard
