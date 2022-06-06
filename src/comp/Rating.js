import React from 'react'

export default function Rating({ x }) {
    return (
        <div>
            <i style={{ color: 1 <= x ? 'orange' : 'silver' }} className='fa fa-star'></i>
            <i style={{ color: 2 <= x ? 'orange' : 'silver' }} className='fa fa-star'></i>
            <i style={{ color: 3 <= x ? 'orange' : 'silver' }} className='fa fa-star'></i>
            <i style={{ color: 4 <= x ? 'orange' : 'silver' }} className='fa fa-star'></i>
            <i style={{ color: 5 <= x ? 'orange' : 'silver' }} className='fa fa-star'></i>
        </div>
    )
}
