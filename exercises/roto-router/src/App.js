import React, { Component } from 'react';
import Navbar from "./Navbar.js"

import Footer from "./Footer.js"
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import Product from "./Product.js"

import './App.css';

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Services}/>
          <Route path="/products/:_id" component={Product}/>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
