import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import CartContext from '../../context/CartContext'
import './index.css'

const FoodItemList = (props) => {
  const { foodItem } = props
  const { AddToCart } = useContext(CartContext)

  const onAddFoodItem = () => {
    AddToCart(foodItem.image_url, foodItem.cost, foodItem.name)
  }

  return (
    <div className='food-item-container' tabIndex={1}>
      <img className='food-item-image' src={foodItem.image_url} alt="food item" />
      <div className='food-item-details'>
        <span className='food-item-name'>{foodItem.name}</span>
        <span className='food-item-cost'>₹ {foodItem.cost}</span>
        <div className='food-item-rating-container'>
          <FaStar style={{ color: "#FFCC00", height: "12px", width: "12px", marginRight: "3px" }} />
          <span className='food-item-rating'>{foodItem.rating}</span>
        </div>
        <button type="button" className='add-btn' onClick={onAddFoodItem}>
          ADD
        </button>
      </div>
    </div>
  )
}

export default FoodItemList