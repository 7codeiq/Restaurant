import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import AllFoods from '../pages/AllFood'
import FoodDetails from '../pages/FoodDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
  return (
    <Routes>
      <Route path='/tasty' element={<Navigate to={'/tasty/home'} />} />
      <Route path='/tasty/home' element={<Home />} />
      <Route path='/tasty/foods' element={<AllFoods />} />
      <Route path='/tasty/foods/:id' element={<FoodDetails />} />
      <Route path='/tasty/cart' element={<Cart />} />
      <Route path='/tasty/checkout' element={<Checkout />} />
      <Route path='/tasty/login' element={<Login />} />
      <Route path='/tasty/register' element={<Register />} />
      <Route path='/tasty/contact' element={<Contact />} />
    </Routes>
  )
}

export default Routers