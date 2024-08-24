import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Button';

function RandomNumber() {
    const [randnumber, setRandNumber] = useState('');

    const fetchRandomNumber = () => {
        axios.get('http://127.0.0.1:8000/api/randnumber/', {
            params: {
                min: 10,
                max: 50
            }
        })
        .then(response => setRandNumber(response.data.randnumber))
        .catch(error => console.error('Error fetching random number:', error));
    };

    useEffect(() => {
        fetchRandomNumber();
    }, []);

    return (
        <div className="box">
            <h1>Random Number Generator</h1>
            <p>{randnumber}</p>
            <Button onClick={fetchRandomNumber} label="Get New Random Number" />
        </div>
    );
}

export default RandomNumber;
