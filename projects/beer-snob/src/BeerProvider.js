import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext()

class BeerProvider extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        this.getBeers()
    }

    getBeers = () => {
        axios.get("https://api.punkapi.com/v2/beers/").then(response => {
            this.setState({
                beers: response.data
            })
        })
    }

    render() {
        return (
            <Provider value={{
                getBeers: this.getBeers,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default BeerProvider;

export function withBeer (C) {
    return props => <Consumer>
                        {value => <C {...value} {...props} />}
                    </Consumer>
}