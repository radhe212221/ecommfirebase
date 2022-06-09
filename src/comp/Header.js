import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteCookie } from '../utils'
export default function Header() {
  const dispatch = useDispatch()
  const [menu, setmenu] = useState(false)
  const navigate = useNavigate()
  const state = useSelector(s => s)

  const { loggedin, user, cart, orders } = state
  const logout = () => {
    deleteCookie("user")
    dispatch({ type: "logout" })
    navigate("/login")
  }
  return (
    <>
      <header>
        <h1 onClick={() => setmenu(!menu)}>Ecommerce <i className='fa fa-bars'></i></h1>
        <div className='header-options'>
          <Link to="/home">home</Link>
          {!loggedin && <Link to="/login">login</Link>}
          {!loggedin && <Link to="/signup">signup</Link>}

          {loggedin && <Link to="/profile">profile</Link>}
          {loggedin && <Link to="/wishlist">wishlist</Link>}
          {loggedin && <Link to="/cart">cart ({cart?.length || 0})</Link>}
          {loggedin && <Link to="/orders">orders ({orders?.length || 0})</Link>}
        </div>
        {loggedin && <div onClick={logout}>
          <a>logout ({user?.name})</a>
        </div>}
      </header>
      <aside className={menu ? "active" : ""}>
        <Link to="/home">home</Link>
        {!loggedin && <Link to="/login">login</Link>}
        {!loggedin && <Link to="/signup">signup</Link>}

        {loggedin && <Link to="/profile">profile</Link>}
        {loggedin && <Link to="/wishlist">wishlist</Link>}
        {loggedin && <Link to="/cart">cart ({cart?.length || 0})</Link>}
        {loggedin && <Link to="/orders">orders ({orders?.length || 0})</Link>}
        {loggedin && <div onClick={logout}>
          <a>logout ({user?.name})</a>
        </div>}
      </aside>
    </>
  )
}
