import React, { Component } from 'react';
import './App.css';

import Navbar from "./Navbar.js";
import About from "./About.js";
import Projects from "./Projects.js"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
