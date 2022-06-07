import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menu, setmenu] = useState(false)
  return (
    <>
      <header>
        <h1 onClick={() => setmenu(!menu)}>Ecommerce <i className='fa fa-bars'></i></h1>
        <div>
          <button>logout (?)</button>
        </div>
      </header>
      <aside className={menu ? "active" : ""}>
        <div><Link to="/home">home</Link></div>
        <div><Link to="/profile">profile</Link></div>
        <div><Link to="/wishlist">wishlist</Link></div>
        <div><Link to="/login">login</Link></div>
        <div><Link to="/signup">signup</Link></div>
        <div><Link to="/cart">cart</Link></div>
        <div><Link to="/orders">orders</Link></div>
      </aside>
    </>
  )
}
