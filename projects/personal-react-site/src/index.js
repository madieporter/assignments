import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BeerProvider from "./BeerProvider.js"

ReactDOM.render(
    <BeerProvider>
        <App /> 
    </BeerProvider>,
document.getElementById('root'));

