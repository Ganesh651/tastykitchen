import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import Home from './components/Home'
import Cart from './components/Cart'
import RestaurantDetails from "./components/RestaurantDetails";
// import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Notfound from './components/Notfound'



const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
)




export default App