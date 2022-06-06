import React from 'react'
import Rating from './Rating'
export default function Product(props) {
  let { data } = props
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
      <div className='cart-btn'>
        <i className='fa fa-shopping-cart'></i>
      </div>
    </div>
  )
}
