import React from 'react'

function CarColor({ car }) {
    const {color} = car
  return (
    <div>
          <ol>{color}</ol>
    </div>
  )
}

export default CarColor
