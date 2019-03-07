import React from 'react';
import './App.css';
import BeerList from "./BeerList.js";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import AllBeers from "./AllBeers.js";
import Featured from "./Featured.js";
import Header from "./Header.js";

import { Switch, Route } from "react-router-dom";



const App = () => {
  return (
  <div>
      <NavBar />
      <div class="contContainer">
        <Header />
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/allbeers" component={AllBeers} />
          <Route path="/featured" component={Featured} />
        </Switch>

        <BeerList />
      </div>
    </div>
  )
}

export default App;