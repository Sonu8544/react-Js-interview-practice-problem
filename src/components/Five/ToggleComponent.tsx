import React, { useState } from 'react'

const ToggleComponent = () => {
    const [isToggle, setIsToggle] = useState(false) 

    const handleToggle = () =>{
        setIsToggle( !isToggle)
    }
  return (
    <>
    <div className="toggle">
        <label htmlFor="/">check Box: </label>
        <input type="checkbox" name="checkBox" onClick={handleToggle} />
    </div>
    <h1> {isToggle ? "ON" : "OF"} </h1>
    </>
  )
}

export default ToggleComponent