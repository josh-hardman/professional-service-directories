import React from 'react'
import PropTypes from 'prop-types'
import StarOutline from 'react-icons/lib/md/star-outline'
import StarHalf from 'react-icons/lib/md/star-half'
import StarFull from 'react-icons/lib/md/star'

const stars = [1,2,3,4,5]

const Rating = ({ rating=5 }) => (
  <div>
    <span>{rating}</span>
    {
      stars.map( (star, i) => (
        rating >= star
          ? <StarFull key={i} />
          : (
            rating + .5 >= star
              ? <StarHalf key={i} />
              : <StarOutline key={i} />
          )
      ))
    }
  </div>
)

Rating.propTypes = {
  rating: PropTypes.number
}

export default Rating
