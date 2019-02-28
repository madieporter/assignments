import React, { Component } from 'react';
import './App.css';
import CardOne from "./CardOne"
import CardTwo from "./CardTwo"
import Clicker from "./Clicker"

class App extends Component {
  render() {
    return (
      <div>
        <CardOne />
        <CardTwo />
        <Clicker />
      </div>
    );
  }
}

export default App;
