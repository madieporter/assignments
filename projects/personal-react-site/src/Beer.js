import React, { Component } from "react";
import { withBeer } from "./BeerProvider";


class Beer extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            
        }
    }

    render() {
        
        return (
            <div>
                
            </div>
        );
    }
}

export default withBeer(Beer);