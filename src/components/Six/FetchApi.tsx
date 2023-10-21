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
                        <tr key={item.id} >
                            <td style={{ border: '2px solid yellow', padding: '5px' }} >{item.id}</td>
                            <td  style={{ border: '2px solid yellow', padding: '5px' }}>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default FetchApi;
