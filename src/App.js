import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/Login";
import Home from './components/Home'
import Cart from './components/Cart'
import RestaurantDetails from "./components/RestaurantDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Notfound from './components/Notfound'
import CartContext from "./context/CartContext";
import { v4 as uuidv4 } from 'uuid'


const App = () => {
  const [cartList, setCartList] = useState([])
  const [foodItemObj, setFoodItemObj] = useState({})
  const [quantity, setQuantity] = useState(1)
  console.log(cartList)

  const AddToCart = (image, name, cost,) => {
    const newItem = {
      id: uuidv4(),
      image,
      name,
      cost,
      quantity
    }

    setCartList(prevState => [...prevState, newItem])
  }

  const increaseQuantity = id => {
    if (quantity >= 1) {
      setQuantity(quantity + 1)
    }
  }


  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }



  return (
    <CartContext.Provider value={{
      cartList,
      AddToCart,
      quantity,
      decreaseQuantity,
      increaseQuantity,
      setQuantity
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/restaurant/:id" element={
            <ProtectedRoute>
              <RestaurantDetails />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}



export default App