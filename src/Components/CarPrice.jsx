import React from 'react'

function CarPrice({ car }) {
    console.log(car)
    const {price} = car
  return (
    <div>
          <ol>{price}</ol>
    </div>
  )
}

export default CarPrice
