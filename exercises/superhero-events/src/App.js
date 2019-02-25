import React, { Component } from 'react';
import './App.css';
import Heros from "./Heros.js"

class App extends Component {
  constructor() {
    super()
  }

    render () {
        
        const superHeros = [
        {
            name: "Wonder Woman",
            catchPhrase: "By the goddess!",
            img: "http://s1.thingpic.com/images/ff/2UkytYpF2geXcFjFdKvLfZkc.png"
        }, {
            name: "Cat Woman",
            catchPhrase: "meow!",
            img: "https://ya-webdesign.com/images/catwoman-transparent-btas-4.png"
        }, {
            name: "Jessica Jones",
            catchPhrase: "I need a drink.",
            img: "https://pngimage.net/wp-content/uploads/2018/06/jessica-jones-png-1.png"
        }, {
            name: "Harley Quinn",
            catchPhrase: "You really put the fun in funeral.",
            img: "http://pngimg.com/uploads/harley_quinn/harley_quinn_PNG14.png"
        }, {
            name: "Gamora",
            catchPhrase: "I would be greatful to die amoung my friends.",
            img: "https://www.seekpng.com/png/detail/217-2179003_gamora-png-free-download-gamora-guardians-of-the.png"
        }, {
            name: "Poison Ivy",
            catchPhrase: "His fate was sealed with a kiss, and now, so is yours.",
            img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/3bedf60e-7c92-42f7-b442-c4918bc99bfd/d803yfd-b91c223a-302e-4ee9-9d4f-03be5d21e322.png/v1/fill/w_777,h_1029,strp/poison_ivy_by_dawidarte_d803yfd-pre.png"
        }
        ]
    

    const displayHeros = superHeros.map((hero) => {
      return (<Heros 
        name= {hero.name}
        img={hero.img}
        catchPhrase={hero.catchPhrase}
        />
        )
    })

    return (
      <div>
        {displayHeros}
      </div>
    )
  }
}
export default App;
