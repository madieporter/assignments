import React, { Component } from "react";
import { withBeer } from "./BeerProvider.js";

class Home extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            input: ""
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        pairedBeers: this.props.prevState.beers.food_pairing.filter()
    }

    render() {
        return (
            <form action="">
                <input type="text" 
                placeholder="Your Food Here"
                name="input"
                value={this.state.name}
                onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default withBeer(Home);
