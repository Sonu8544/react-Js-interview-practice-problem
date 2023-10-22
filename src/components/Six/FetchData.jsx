import React, { useState, useEffect } from 'react';

const FetchData = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    useEffect(() => {
        fetchData();
    }, []); 

    return (
        <>
            <h1>Data Fetch Here</h1>
            <table style={{border: "2px solid orange"}}>
                <thead>
                    <tr>
                        <th  style={{border: "2px solid orange", padding: '5px', margin:"5px"}} >Id</th>
                        <th  style={{border: "2px solid orange", padding: '5px', margin:"5px"}} >Title</th>
                        <th  style={{border: "2px solid orange", padding: '5px', margin:"5px"}} >Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td style={{border: "1px solid yellow"}} >{item.id}</td>
                            <td style={{border: "1px solid yellow"}} >{item.title}</td>
                            <td style={{border: "1px solid yellow"}} >{item.completed ? 'Yes' : 'No'}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </>
    )
}

export default FetchData;
