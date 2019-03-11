import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BeerProvider from "./BeerProvider.js";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <BeerProvider>
        <App /> 
    </BeerProvider>
    </BrowserRouter>,
document.getElementById('root'));

