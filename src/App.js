import React, { useEffect } from 'react'
import { _get } from './services'
import { thisUserData } from './utils'
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
import Loader from './comp/Loader'
export default function App() {
  const state = useSelector(s => s)
  const dispatch = useDispatch()

  const load = () => {
    const boot = async () => {
      dispatch({ type: "loader.1" })
      try {
        let products = await _get("products.json")
        let cart = await _get("cart.json")
        let orders = await _get("orders.json")
        dispatch({ type: "products", payload: products })
        dispatch({ type: "cart", payload: thisUserData(cart) })
        dispatch({ type: "orders", payload: thisUserData(orders) })
      }
      catch (e) {
        console.log(`something went wrong :: ${e}`)
      }
      finally {
        dispatch({ type: "loader.0" })
      }
    }

    boot()
  }

  useEffect(load, [])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" component={ErrorPage} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Loader loading={state?.loader} />
    </>
  )
}
