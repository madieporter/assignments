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

    getBounties = () => {
        
    }
}

