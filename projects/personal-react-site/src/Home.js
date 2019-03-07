import React, { Component } from "react";
import { withBeer } from "./BeerProvider.js";
import DisplayPairedBeers from "./DisplayPairedBeers.js";

class Home extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            input: "",
            filteredBeers: [],
            message: false
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const pattern = new RegExp(this.state.input, "gi")

        const filteredBeers = this.props.beers.filter(beer => {
            const pairedBeers = [];
            for (let i = 0; i < beer.food_pairing.length; i++) {
                return beer.food_pairing[i].match(pattern)
            }
        })
        if (filteredBeers.length){
            this.setState({filteredBeers, message: false})
        }else{
            this.setState({filteredBeers, message: true})
        }
        

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="Your Food Here"
                    name="input"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                {this.state.message ? 
                    <div><h1>Sorry, no paired beers!!</h1></div>
                    :
                    this.state.filteredBeers.map((pairedBeers, i) => <DisplayPairedBeers key={i} pairedBeers={pairedBeers} />)
                }
            </div>
        )
    }
}

export default withBeer(Home);
