import React from 'react';
import UglyThingsList from "./UglyThingsList.js";
import Form from "./Form.js"

import './App.css';

const App = () => {
  return (
    <div>
      <UglyThingsList />
      <Form button="Submit" type="addNew" />
    </div>
  )
}

export default App;
