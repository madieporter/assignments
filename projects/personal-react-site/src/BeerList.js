import React, { Component } from "react";
import { withBeer } from "./BeerProvider";
import Beer from "./Beer.js";

class BeerList extends Component {
    componentDidMount() {
        this.props.getBeers()
    }

    render() {
        const mappedBeers = this.props.beers.map(beer => <Beer key={beer.id} beer={beer} />)
        return (
            <div>
                {mappedBeers}
            </div>
        )
    }
}

export default withBeer(BeerList);