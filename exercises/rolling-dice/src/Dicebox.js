import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.state = {
        num1: Math.floor((Math.random()*6) +1),
        num2: Math.floor((Math.random()*6) +1),
        num3: Math.floor((Math.random()*6) +1),
        num4: Math.floor((Math.random()*6) +1),
        num5: Math.floor((Math.random()*6) +1)
    }
  }

  rollDice = () => {
    this.setState({ 
            num1: Math.floor((Math.random()*6) +1),
            num2: Math.floor((Math.random()*6) +1),
            num3: Math.floor((Math.random()*6) +1),
            num4: Math.floor((Math.random()*6) +1),
            num5: Math.floor((Math.random()*6) +1)
    })
  }

  render() {
    const mainStyles = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      backgroundColor: "#C74D0A",
      height: "100vh"
    }

    const styles = {
      width: "200px",
      height: "200px",
      border: "10px solid",
      borderRadius: "20%",
      textAlign: "center",
      margin: "20px",
      fontFamily: "'Major Mono Display', monospace",
      fontSize: "170px",
      backgroundColor: "white"
  } 
  
    const btn ={
      width: "600px",
      height: "100px",
      backgroundColor: "#C74D0A",
      fontFamily: "'Major Mono Display', monospace",
      fontSize: "60px",
      color: "#35592B",
      backgroundColor: "#C48D0A",
      border: "3px solid black",
      borderRadius: "10%",
      cursor: "cell"
    }

    return (
      <div style={mainStyles}>
          <div style={styles}>{this.state.num1}</div>
          <div style={styles}>{this.state.num2}</div>
          <div style={styles}>{this.state.num3}</div>
          <div style={styles}>{this.state.num4}</div>
          <div style={styles}>{this.state.num5}</div>
          <button style={btn} onClick={this.rollDice}>Roll the Dice</button>
        </div>
    )
  }
}
  export default App;