import React from 'react'

export const ButtonComp = ({handleInput,value}) => {
  return (
  <button onClick={()=> handleInput(value)}>+</button>
  
  )
}
