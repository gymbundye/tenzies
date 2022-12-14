import React from 'react'

function Die(props) {
  return (
    <div className='dice-face'>
        <h2 className='dice-num'>{props.value}</h2>
    </div>
  )
}

export default Die