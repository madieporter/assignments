import React from 'react';
import './App.css';
import BeerList from "./BeerList.js";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import AllBeers from "./AllBeers.js";
import FavoritePairings from "./FavoritePairings.js";

import { Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/allbeers" component={AllBeers} />
        <Route path="/favorites" component={FavoritePairings} />
      </Switch>

      <BeerList />
      
    </div>
  )
}

export default App;