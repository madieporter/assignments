import React from 'react';
import UglyThings from "./UglyThings.js";
import Form from "./Form.js"

import './App.css';

const App = () => {
  return (
    <div>
      <Form button="Submit" type="addNew" />
      <UglyThings />
    </div>
  )
}

export default App;
