import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Button';

function MotivationalQuote() {
    const [quote, setQuote] = useState('');
    const [name, setName] = useState('');

    const fetchQuote = () => {
        axios.post('http://127.0.0.1:8000/api/motivational-quote/', {
            name: name
        })
        .then(response => setQuote(response.data.quote))
        .catch(error => console.error('Error fetching motivational quote:', error));
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchQuote();
    };

    return (
        <div className="box">
            <h1>Personalized Motivational Quote</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                    />
                </label>
                <Button type="submit" label="Get New Quote" />
            </form>
            <blockquote>{quote}</blockquote>
        </div>
    );
}

export default MotivationalQuote;
