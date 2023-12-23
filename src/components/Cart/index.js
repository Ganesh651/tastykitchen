import React from 'react'
import { useContext } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EmptyCart from '../EmptyCart'
import CartContext from '../../context/CartContext'

const Cart = () => {
  const { cartList } = useContext(CartContext)
  return (
    <>
      <Header />
      <div className='cart-container'>
        {cartList.length === 0 ? <EmptyCart /> : "Cart items list"}
      </div>
      {cartList.length !== 0 && < Footer />}
    </>
  )
}

export default Cart
