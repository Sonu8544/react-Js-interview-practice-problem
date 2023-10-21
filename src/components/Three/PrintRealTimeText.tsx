import React, { useState } from 'react'
import "./Three.css"

const PrintRealTimeText = () => {
    const [text, setText] = useState("")

    return (
        <>
            <div className="input-box">
                <input 
                name='inputtext'
                className='input'
                type="text" 
                placeholder='Enter text here' 
                onChange={(e) => {setText(e.target.value)}}
                />
            </div>
            <h2>Print here:  {text} </h2>
        </>
    )
}

export default PrintRealTimeText