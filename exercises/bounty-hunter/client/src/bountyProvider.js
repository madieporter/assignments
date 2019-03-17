import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext()

class bountyProvider extends Component {
    constructor(){
        super()

        this.state = {
            bounties = []
        }
    }

    componentDidMount() {
        this.getBounties()
    }

    getBounties = () => {
        axios.get("/bounties").then(response => {
            this.setState({
                bounties: response.data
            })
        })
    }

    render() {
        return (
            <Provider value ={{
                getBounties: this.getBounties,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default bountyProvider;

export function withBounties (C) {
    return props => <Consumer>
                        {value => <C {...value} {...props} />}
                    </Consumer>
}