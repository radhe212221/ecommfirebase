import React, { useState } from 'react'

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
        <div>home</div>
        <div>profile</div>
        <div>wishlist</div>
        <div>login</div>
        <div>signup</div>
        <div>cart</div>
        <div>orders</div>
      </aside>
    </>
  )
}
