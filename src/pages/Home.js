import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const state=useSelector(s=>s)
  return (
    <div>
      <div className='filters'>
        <div>sort</div>
        <div>search</div>
        <div>tags</div>
      </div>
      <div className='products'>

      </div>
    </div>
  )
}
