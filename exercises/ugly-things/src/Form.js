import React, { Component } from "react";
import { withUglyThings } from "./UglyThingsProvider";

class Form extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            description: "",
            button: props.button || "Click Here"
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {

    }

    render() {
        <form>
            <input type="text" 
            placeholder="Ugly Thing Name"
            name="name"
            value={this.state.title}
            onChange={this.handleChange} />
            <input type="text" 
            placeholder="Ugly Thing Description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange} />
            <button>{this.state.button}</button>
        </form>
    }
}

export default withUglyThings(Form);