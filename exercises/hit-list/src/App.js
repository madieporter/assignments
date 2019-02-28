import React, { Component } from 'react';
import axios from "axios";

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }
  
  async getHitList() {
    const response = await axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
    return response.data;
  }

  async componentDidMount() {
    try {
      const listers = await this.getHitList()
      this.setState({people: listers})
    } catch(err) {
      console.log(err)
    }
  }
  
  

  render() {
      const imgStyles = {
      width: "500px",
      height: "500px"
      
    }

    const mappedHitList = this.state.people.map((person, i) => {
      return (
        <div>
          <div key={i}>
          {person.name}
          </div>
          <img style={imgStyles} src={person.image} alt=""/>
        </div>
      )
    })
    return (
      <div>
        <h1>Don Corleone's Hit List</h1><br></br>
        <div className="all">{mappedHitList}</div>
      </div>
    );
  }
}

export default App;
