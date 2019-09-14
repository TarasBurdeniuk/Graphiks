import React from 'react';
import './reset.css';
import './App.css';
import MainIndicators from './components/MainIndicators/MainIndicators';
import Orders from './components/Orders/Orders';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="container">
                    <MainIndicators />
                    <Orders />
                </div>
            </div>
        </Provider>
    );
};

export default App;
