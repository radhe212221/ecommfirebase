import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menu, setmenu] = useState(false)
  const state = useSelector(s => s)
  const { loggedin, user } = state
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
          {loggedin && <Link to="/cart">cart</Link>}
          {loggedin && <Link to="/orders">orders</Link>}
        </div>
        {loggedin && <div>
          <button>logout ({user?.name})</button>
        </div>}
      </header>
      <aside className={menu ? "active" : ""}>

      </aside>
    </>
  )
}
