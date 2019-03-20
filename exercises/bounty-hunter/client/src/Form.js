import React, { Component } from "react";
import { withProvider } from "./BountyProvider";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                living: "",
                bountyAmount: "",
                image: "",
                type: "",
                _id: ""
            }
        }
    }

    handleSubmit = e => {
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            living: this.state.living,
            bountyAmount: this.state.bountyAmount,
            image: this.state.image,
            type: this.state.type
        }
    }

    handleChange = e => {
        
    }
}