import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = (props) => {
  const { decreaseQuantity, increaseQuantity } = useContext(CartContext)
  const { item } = props
  const { cost, image, name, quantity } = item

  const onIncreaseQuantity = () => {
    increaseQuantity()
  }

  const onDecreaseQuantity = () => {
    decreaseQuantity()
  }


  return (
    <div className='cart-item-container'>
      <div className='food-items'>
        <img className='image' src={image} alt="food" />
        <span>{name}</span>
      </div>
      <div className='quantity-container'>
        <div className='quantity-button' onClick={onDecreaseQuantity}>-</div>
        <div className='quantity'>{quantity}</div>
        <div className='quantity-button' onClick={onIncreaseQuantity}>+</div>
      </div>
      <div className='price-container'>
        <span className='cost'>₹ {cost}.00</span>
      </div>
    </div>
  )
}

export default CartItem