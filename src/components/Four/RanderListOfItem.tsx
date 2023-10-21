import React from 'react'
import "./Four.css"

const RanderListOfItem = () => {

    const listOfItem = ["one", "Two", "Three", "Four", "Five"];


    return (
        <>
            <ul>
                <h1>List Item Here UL - LI</h1>
                {listOfItem.map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>


            <h1>Item Goes Here</h1>
            {listOfItem.map((item, index) => (
                <h1 key={index} > {item} </h1>
            ))}
        </>
    )
}

export default RanderListOfItem