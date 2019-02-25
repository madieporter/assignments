import React, { Component } from 'react';

class App extends Component {
  //extends alllow the instructor to inherit the Compnent properties
  constructor () {
    super () //constructor functions must have super() 

    this.state = {
      counter: 100
    }
  }

  subtract = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Subtract me: {this.state.counter}</h1>
        <button onClick={this.subtract}>!-----!</button>
      </div>
    )
  }
}

export default App;
