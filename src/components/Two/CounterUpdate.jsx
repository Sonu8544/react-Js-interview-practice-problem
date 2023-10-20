import React from 'react'
import "./CounterUpdate.css"
import { useState } from 'react'

const CounterUpdate = () => {
 const [number, setNumber] = useState(1)
   
 const incrementNumber = () =>{
    setNumber(number+1)
 }

 const decrementNumber = () =>{
    if(number > 1){
        setNumber(number-1)
    }  
}

  return (
   <>
     <button onClick={decrementNumber} > decrementNumber </button>
     <h2 style={{ margin:'10px'}}> {number} </h2>
     <button onClick={ incrementNumber} > incrementNumber</button>
   </>
  )
}

export default CounterUpdate