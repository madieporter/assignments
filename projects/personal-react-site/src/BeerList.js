import React, { Component } from "react";
import { withBeer } from "./BeerProvider";
import AllBeers from "./AllBeers.js";

class BeerList extends Component {
    componentDidMount() {
        this.props.getBeers()
    }

    render() {
        console.log(this.props)
        const mappedBeers = this.props.beers.map(beer => <AllBeers key={beer.id} beer={beer} />)
        return (
            <div>
                {mappedBeers}
            </div>
        )
    }
}

export default withBeer(BeerList);