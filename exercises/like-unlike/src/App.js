import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isTrue: true
    }
  }

  render () {
    const styles = {
      height: "225px",
      width: "225px"
    }
    const changeLike = () => {
      this.setState((prevState) => {
        return {
          isTrue: !prevState.isTrue
        }
      })
    }

    let likeIt = this.state.isTrue ? 
    <div>
      <img style={styles} src="https://vignette.wikia.nocookie.net/central/images/6/68/Thumb-up-smiley.png/revision/latest?cb=20150808122703" alt=""/>
      <h1>like</h1>
    </div>
    :
    <div>
      <img style={styles} src="https://www.seekpng.com/png/small/9-91754_thumbs-down-emoji-png-clipart-freeuse-stock-thumbs.png" alt=""/>
      <h1>dislike</h1>
    </div>

    return (
      <div>
        <button onClick={changeLike}>{likeIt}</button>
      </div>
    )
  }
}
export default App;
