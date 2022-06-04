import React, { useEffect } from 'react'
import { _get } from './services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './comp/Header'
import Footer from './comp/Footer'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Checkout from './pages/Checkout'
import { useDispatch, useSelector } from 'react-redux'
export default function App() {
  const state = useSelector(s => s)
  const dispatch = useDispatch()

  const load = () => {
    _get("/products.json")
      .then(d => {
        dispatch({ type: "products", payload: d })
      })

    if (state.loggedin) {
      
    }


  }

  useEffect(load, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
