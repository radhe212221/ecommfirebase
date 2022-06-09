import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Rating from './Rating'
import { _post, _patch } from '../services'
import { checkinCart, findCart } from '../utils'
import { toast } from 'react-toastify'
export default function Product(props) {
  let { data } = props
  const dispatch = useDispatch()
  const state = useSelector(s => s)
  const { cart, orders, loggedin, user } = state
  const uid = user?.id
  const pid = data?.id
  const addtoCart = () => {
    dispatch({ type: "loader.1" })
    if (checkinCart(cart, uid, pid)) {
      let { qty, id } = findCart(cart, uid, pid)
      qty = +qty + 1
      _patch(`cart/${id}.json`, { qty })
        .then(d => cart.map(x => x.id === id ? ({ ...x, qty }) : x))
        .then(d => dispatch({ type: "cart", payload: d }))
        .then(d => toast("cart updated " + qty))
        .catch(d => toast(JSON.stringify(d)))
        .finally(d => dispatch({ type: "loader.0" }))

    }
    else {
      let payload = {
        ...data,
        ...user,
        qty: 1,
        uid, pid
      }
      delete payload["id"]
      _post("cart.json", payload)
        .then(d => ({ ...payload, id: d }))
        .then(d => [...cart, d])
        .then(d => dispatch({ type: "cart", payload: d }))
        .then(d => toast("added to cart"))
        .catch(e => toast(JSON.stringify(e)))
        .finally(e => dispatch({ type: "loader.0" }))
    }
  }
  return (
    <div className='item'>
      <img width={100} src={data.image} />
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.old}</div>
      <div>{data.new}</div>
      <div>
        <Rating x={data.rating} />
      </div>
      <div className='discount'>{data.discount} % off</div>
      <div className='tags'>{data.tags}</div>
      {loggedin && <div onClick={addtoCart} className='cart-btn'>
        <i className='fa fa-shopping-cart'></i> ({findCart(cart, uid, pid)?.qty || 0})
      </div>}
    </div>
  )
}
