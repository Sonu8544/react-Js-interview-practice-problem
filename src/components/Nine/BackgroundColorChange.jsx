import React, { useState } from 'react'

const BackgroundColorChange = () => {
    const [color, setColor] = useState('black')

    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'voilet']
    const randomcolor = Math.floor(Math.random() * colors.length)

    const changeBackgroundColor = () => {
        setColor(colors[randomcolor]);
    }

    return (
        <>
            <div className="container" style={{
                backgroundColor: color,
                minWidth: '200px',
                maxWidth: '200px',
                minHeight: '200px',
                borderRadius:'10px'

            }}>
                <h1 onClick={changeBackgroundColor}>Lorem, ipsum dolor.</h1>
            </div>
        </>
    )
}

export default BackgroundColorChange
