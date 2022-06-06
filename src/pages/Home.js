import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uniqueTags } from '../utils'
import Product from '../comp/Product'
export default function HomePage() {
  const state = useSelector(s => s)
  const dispatch = useDispatch()

  const { filters, search, col, order, tagname, products } = state


  const handleClick = (_col, _order) => {
    // dispatch({ type: "sort", payload: { col: _col, order: _order } })
  }

  const handleChange = e => {
    let { value } = e.target
    // dispatch({ type: "search", payload: value })
  }

  const handleTagname = value => {
    // dispatch({ type: "tagname", payload: value })

  }
  return (
    <div>
      <div className='filters'>
        <div>
          {filters.map(x => <button onClick={() => handleClick(x, !order)} className={col === x ? 'active' : ''}><i className='fa fa-sort'></i>{x}</button>)}
        </div>
        <div>
          <input placeholder='search' value={search} onChange={handleChange} />
        </div>
        <div>{uniqueTags(products).map(x => <button onClick={handleTagname(x.name)}>{x.name} {x.count}</button>)}</div>
      </div>
      <div className='products'>
        {products?.map(x => <Product key={x.id} data={x} />)}
      </div>
    </div >
  )
}
