import React from 'react';
import './App.css';
import Friend from "./Friend.js";

const friends = [
  {
    name: "Rikki",
    age: 27,
    pets: [
      {
        name: "spot",
        breed: "tabby",
      },{
        name: "John Johnson",
        breed: "husky"
      }, {
        name: "Bear the Bear",
        breed: "Grizzly"
      }
    ]
  }, {
    name: "Jess",
    age: "26",
    pets: [
      {
        name: "Sally",
        breed: "Australian Shephard"
      }
    ]
  }, {
    name: "Sam",
    age: "31",
    pets: [
      {
        name: "Indy",
        breed: "Akita"
      }, {
        name: "Anna",
        breed: "Persian Cat"
      }
    ]
  }, {
    name: "Jenny",
    age: 32,
    pets: [
      {
        name: "fluffy",
        breed: "sphynx cat"
      }, {
        name: "patches",
        breed: "sphynx cat"
      }, {
        name: "tiger",
        breed: "sphynx cat"
      }, {
        name: "oscar",
        breed: "sphynx cat"
      }
    ]
  }
]

const App = () => {
  
  const mappedFriends = friends.map((friend, i) => {
      return (
        <Friend name={friend.name}
                age={friend.age}
                key={i+friend.name}
                pets={friend.pets}
        />
      )
    })

    const styles = {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "Center",
      backgroundImage: "url(https://i.pinimg.com/originals/55/cb/b4/55cbb428999d086bd73077a5cedb7ebd.jpg",
      height: "100vh"
    }
    
  return (
    <div style={styles}>
      {mappedFriends}
    </div>
  )
}

export default App;
