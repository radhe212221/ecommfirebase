import React, { useEffect } from 'react'
import { _get } from './services'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Orders" component={Orders} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Checkout" component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
