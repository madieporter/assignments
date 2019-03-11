import React, { Component } from "react";
import { withBeer } from "./BeerProvider.js";
import DisplayPairedBeers from "./DisplayPairedBeers.js";

class Home extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            input: "",
            filteredBeers: [],
            message: false,
            submitted: false
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
                if (beer.food_pairing[i].match(pattern)) {
                    pairedBeers.push(beer)
                }
            }
            if (pairedBeers.length) {
                return pairedBeers
            } else {
                return null
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
                <form className="form"
                    onSubmit={this.handleSubmit}>
                    <input className="input"
                    type="text" 
                    placeholder="Search Pairings"
                    name="input"
                    value={this.state.name}
                    onChange={this.handleChange}
                    /><br></br>
                    <button className="btn">SEARCH</button>
                </form>
                {this.state.message ? 
                        <div className="sorry">Sorry snob, no paired beers for your unique taste yet!</div>
                    :
                    this.state.filteredBeers.map((pairedBeers, i) => <DisplayPairedBeers key={i} pairedBeers={pairedBeers} />)
                }
            </div>
        )
    }
}

export default withBeer(Home);
