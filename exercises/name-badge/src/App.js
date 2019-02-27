import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favoriteFood: "",
      aboutYou: "",
      badgeCollection: [],
      backgroundColor: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.changeColor()
    this.setState((prevState) => {
      return {
        badgeCollection: [
          ...prevState.badgeCollection,
          {
            fullName: `${this.state.firstName}  ${this.state.lastName}`,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            aboutYou: this.state.aboutYou,
            backgroundColor: prevState.backgroundColor
          }
        ]
      }
    })
  }

  changeColor = () => {
    if (this.state.backgroundColor === "#FF443F") {
      this.setState({backgroundColor: "#0A94FF"})
    } else {
      this.setState({backgroundColor:"#FF443F"})
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
 

  render() {
    const {firstName, lastName, email, birthPlace, phone, favoriteFood, aboutYou} = this.state;
    const isEnabled = firstName.length > 0 && lastName.length > 0 && email.length > 0 && birthPlace.length > 0 && phone.length > 0 && favoriteFood.length > 0 && aboutYou.length > 0;
   
    return (
      <div>
        <div className="whoAreYou">Who Are You?</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="input1" pattern=".{3,}" type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
          <input className="input2" pattern=".{3,}" type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
          <input className="input3" pattern=".{3,}" type="text" name="email" placeholder="E-mail" onChange={this.handleChange}/>
          <input className="input4" pattern=".{3,}" type="text" name="birthPlace" placeholder="Place of Birth" onChange={this.handleChange}/>
          <input className="input5" pattern="[0-9]{7,10}" type="text" name="phone" placeholder="Phone Number" onChange={this.handleChange}/>
          <input className="input6" pattern=".{3,}" type="text" name="favoriteFood" placeholder="Favorite Food" onChange={this.handleChange}/>
          <input className="aboutYou" pattern=".{3,}" type="text" name="aboutYou" placeholder="Tell us about yourself" onChange={this.handleChange}/>
          <button className="btn" disabled={!isEnabled}>Submit</button>
        </form>
          
        

        {this.state.badgeCollection.map((badge, i) => {
          console.log(badge.backgroundColor)
          return (
            <div key={i} className="badge">
              <div className="header" style={{backgroundColor: badge.backgroundColor}}>HELLO<br/> my name is</div>
              <br/>
              <div><b>Name:</b> {badge.fullName}</div>
              <div><b>E-mail:</b> {badge.email}</div>
              <div><b>Place of Birth:</b> {badge.birthPlace}</div>
              <div><b>Phone Number:</b> {badge.phone}</div>
              <div><b>Favorite Food:</b> {badge.favoriteFood}</div>
              <div><b>About yourself:</b> {badge.aboutYou}</div>
            </div>
          )
      })}

      </div>
    )
  }
}

export default App;
