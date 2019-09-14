import React from 'react';
import './reset.css';
import './App.css';
import MainIndicators from './components/MainIndicators/MainIndicators';
import Orders from './components/Orders/Orders';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <MainIndicators />
                <Orders />
            </div>
        </div>
    );
};

export default App;
