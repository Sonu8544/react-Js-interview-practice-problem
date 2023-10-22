import React, { useEffect, useState } from 'react';

const FetchApi = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setData(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Lorem, ipsum dolor.</h1>
            <table style={{ border: '2px solid orange', padding: '20px' }} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item} >  //item.id
                            <td style={{ border: '2px solid yellow', padding: '5px' }} >{item}</td> // item.id
                            <td  style={{ border: '2px solid yellow', padding: '5px' }}>{item}</td>  // item.name
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default FetchApi;
