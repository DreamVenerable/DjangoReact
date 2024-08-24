import React from 'react';
import './App.css';
import RandomNumber from './components/RandomNumber';
import MotivationalQuote from './components/MotivationalQuote';

function App() {
    return (
        <div className="container">
            <RandomNumber />
            <MotivationalQuote />
        </div>
    );
}

export default App;
