import React from 'react';
import './reset.css';
import './App.css';
import MainIndicators from './components/MainIndicators/MainIndicators';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <MainIndicators />
            </div>
        </div>
    );
};

export default App;
