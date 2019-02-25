import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = { //setting the OG state for empty input fields // setting state must be in the constructor
      firstName: "",
      lastName: "",
      names: []
    }
  }

  handleChange = (e) => { //fat arrow function for input fields
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => { //fat arrow function for submitting and printing the names to a list. 
    e.preventDefault();
    let name = `${this.state.firstName} ${this.state.lastName}`;
    this.setState((prevState) => {
      return ({
        names: [...prevState.names, name], //pushing the new inputted names into the empty names array
        firstName: "", //reseting the input box to be empty
        lastName: ""   //reseting the input box to be empty
      })
    })
  }

  render() { //mapping through the names array to return them in the list on the webpage
    let nameMap = this.state.names.map((name, i) => { //must set keys for all maps
    return (
    <li key={name + i}>{name}</li>)
    })
  

    return ( //this is what displays on the webpage, must be in the render 
      //the handleSubmit function must be in the form tag, to read it as a form input
      //onChange when the input field is changed
      <form onSubmit={this.handleSubmit}>  
      <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/> 
      <br/>
      <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
      <button>Submit</button>
      <h1>{this.state.firstName} {this.state.lastName}</h1>
      <ul>{nameMap}</ul>
      </form>
    )
  }
}

export default App;
//https://reactjs.org/docs/forms.html very helpful