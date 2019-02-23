import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      box1: "#BCFF00",
      box2: "#BCFF00",
      box3: "#BCFF00",
      box4: "#BCFF00"
    }
  }

  black = () => {
    this.setState({
      box1: "black",
      box2: "black",
      box3: "black",
      box4: "black"
    })
  }

  purple = () => {
    this.setState ({
      box1: "#FD28FF",
      box2: "#C76CFF"
    })
  }

  blue1 = () => {
    this.setState ({
      box3: "#48E8B6"
    })
  }

  blue2 = () => {
    this.setState ({
      box4: "#2648E0"
    })
  }

  white = () => {
    this.setState ({
      box1: "white",
      box2: "white",
      box3: "white",
      box4: "white"
    })
  }

  multi = () => {
    this.setState ({
      box1: "#A1E800",
      box2: "#D44E00",
      box3: "#9B629C",
      box4: "#6BFDFF"
    })
  }

  oneBox = () => {
    this.setState ({
      box1: "white",
      box2: "#FF07D4",
      box3: "white",
      box4: "white"
    })
  }

  twoBlack = () => {
    this.setState({
      box1: "#D47700",
    })
  }

  render () {
    const styles = {
      backgroundImage: "url(https://hdwallsource.com/img/2015/9/psychedelic-wallpaper-46982-48469-hd-wallpapers.jpg)",
      height: "100vh"
    }

    const allBox = {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
    }

    const box1 = {
      margin: "20px",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      backgroundColor: this.state.box1
    }

    const box2 = {
      margin: "20px",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      backgroundColor: this.state.box2
    }

    const box3 = {
      margin: "20px",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      backgroundColor: this.state.box3
    }

    const box4 = {
      margin: "20px",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      backgroundColor: this.state.box4
    }


    return (
      <div style={styles}>
        <div style={allBox}>
          <div style={box1}></div>
          <div style={box2}></div>
          <div style={box3}></div>
          <div style={box4}></div>
        </div>
        
        <button className="button" onClick={this.black}>D</button>
        <button className="button" onClick={this.purple}>J</button>
        <button className="button" onClick={this.blue1}>M</button>
        <button className="button" onClick={this.blue2}>A</button>
        <button className="button" onClick={this.white}>D</button>
        <button className="button" onClick={this.multi}>W</button>
        <button className="button" onClick={this.oneBox}>U</button>
        <button className="button" onClick={this.twoBlack}>Z</button>
      </div>
    )
  }
}
export default App;
