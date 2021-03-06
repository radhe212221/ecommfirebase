import { Table } from 'antd';
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import { _patch, _delete, _post } from '../services'
import { toast } from 'react-toastify';
import { thisUserData } from '../utils';
export default function Cart() {
  const state = useSelector(s => s)
  let { cart } = state
  cart = thisUserData(cart)
  const dispatch = useDispatch()
  const dataSource = state?.
    cart?.
    map((x, i) => ({
      ...x,
      key: i,
      image: <img width={30} src={x.image} />,
      total: x.new * x.discount * x.qty / 100,
      qtyActions: <>
        <button onClick={() => handleQty(x.qty - 1, x.id)}>-</button>
        <span className='mx-2'>{x.qty}</span>
        <button onClick={() => handleQty(x.qty + 1, x.id)}>+</button>
      </>,
      actions: <button onClick={() => removeFromCart(x.id)}><i className='fa fa-trash-o'></i></button>
    }))
  const cols = ["id", "image", "discount", "new", "total", "qtyActions", "actions"]
  const columns = cols?.map(x => ({ key: x, dataIndex: x, title: x }))

  const handleQty = (qty, id) => {
    dispatch({ type: "loader.1" })
    _patch(`cart/${id}.json`, { qty })
      .then(d => cart.map(x => x.id === id ? ({ ...x, qty }) : x))
      .then(d => dispatch({ type: "cart", payload: d }))
      .then(d => toast("qty updated"))
      .catch(d => toast(JSON.stringify(d)))
      .finally(() => {
        dispatch({ type: "loader.0" })
      })
  }

  const removeFromCart = (id) => {
    dispatch({ type: "loader.1" })
    _delete(`cart/${id}.json`)
      .then(d => cart.filter(x => x.id !== id))
      .then(d => dispatch({ type: "cart", payload: d }))
      .then(d => toast("removed from cart"))
      .catch(d => toast(JSON.stringify(d)))
      .finally(() => {
        dispatch({ type: "loader.0" })
      })
  }

  const checkout = async () => {
    dispatch({ type: "loader.1" })
    let cart1 = cart
    let cart2 = cart
    for (let item of cart1) {
      let r2 = await _delete(`cart/${item?.id}.json`)
      let r1 = await _post("orders.json", item)
    }
    dispatch({ type: "loader.0" })
  }

  return (
    <div className='container wrapper'>
      <button onClick={checkout}>checkout</button>
      <h1>total cart ({cart?.length || 0})</h1>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  )
}
