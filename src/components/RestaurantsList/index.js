import React from 'react'
import { FaStar } from "react-icons/fa";
import './index.css'

const RestaurantsList = (props) => {
  const { restaurant } = props


  return (
    <div className='restaurant-container'>
      <img src={restaurant.image_url} alt={restaurant.name} className='restaurant-image' />
      <div className='restaurant-details'>
        <span className='restaurant-name'>{restaurant.name}</span>
        <span className='cuisine'>{restaurant.cuisine}</span>
        <div className='rating-container'>
          <FaStar style={{ color: "#FFCC00", height: "12px", width: "12px" }} />
          <span className='rating'>{restaurant.user_rating.rating}</span>
          <span className='review-count'>{`(${restaurant.user_rating.total_reviews} ratings)`}</span>
        </div>
      </div>
    </div>
  )
}

export default RestaurantsList
