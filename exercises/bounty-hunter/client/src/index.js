import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BountyProvider from "./BountyProvider";
import App from './App';


ReactDOM.render(
    <BountyProvider>
        <App />
    </BountyProvider>
, document.getElementById('root'));

