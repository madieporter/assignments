import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Services" component={Services}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
