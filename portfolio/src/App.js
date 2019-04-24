import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Navbar from "./Navbar.js";
import Projects from "./Projects.js";
import Home from "./Home.js";
import Contact from "./Contact.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
                <Route  exact path="/" component={Home} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Contact" component={Contact} />
            </Switch>
      </div>
    );
  }
}

export default App;
