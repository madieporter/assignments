import React, { Component } from "react";
import { withUglyThings } from "./UglyThingsProvider";

class Form extends Component {
    constructor() {
        super()

        this.state = {
            title: "",
            description: "",
        }
    }

    componentDidMount() {
        if(this.props.type === "edit") {
            let {title, description} = this.props.uglyThing
            this.setState({title, description})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.type === "addNew" ? this.props.postUglyThing(this.state) : this.props.editUglyThing(this.props.uglything._id, this.state)
    }

    render() {
        return (
            <form className="form">
            <div className="formTitle">Add Another Ugly Woob</div>
                <input className="input" 
                    type="text" 
                    placeholder="Ugly Thing Name"
                    name="name"
                    value={this.state.title}
                    onChange={this.handleChange} /><br></br>
                <input className="input" 
                    type="text" 
                    placeholder="Ugly Thing Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange} /><br></br>
                <input className="input" 
                    type="text"
                    value={this.state.imgUrl}
                    name="imgUrl"
                    placeholder="Image URL"
                    onChange={this.handleChange} /><br></br>
                    <button className="btn">{this.props.button}</button>
            </form>
        )
       
    }
}

export default withUglyThings(Form);