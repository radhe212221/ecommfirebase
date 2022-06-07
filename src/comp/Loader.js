import React from 'react'

export default function Loader({ loading }) {
  if (!loading) return null
  return (
    <div className='loader'>
      <div className='sub'></div>
    </div>
  )
}
