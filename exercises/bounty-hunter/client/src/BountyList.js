import React, { Component } from "react";
import Bounty from "./Bounty";
import axios from "axios";

class BountyList extends Component {
    constructor() {
        super()

        this.state ={
            inputs: {
                firstName: "",
                lastName: "",
                living: "",
                bountyAmount: "",
                image: "",
                type: ""
            },
            bounties: []
        }
    }

    //GET
    async componentDidMount() {
        const response = await
        axios.get("/bounties")
        this.setState({
            bounties: response.data
        })
    }

    //POST
    handleSubmit = e => {
        e.preventDefault()
        axios.post("/bounties", this.state.inputs).then(response => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, response.data],
                inputs: {
                    firstName: "",
                    lastName: "",
                    living: "",
                    bountyAmount: "",
                    image: "",
                    type: ""
                }
            }))
        })
    }

    //PUT
    editBounty = (_id, updatedBounty) => {
        axios.put("/bounties", updatedBounty).then(response => {
            this.setState(prevState => ({
                bounties: prevState.bounties.map(bounty => bounty._id === _id ? bounty = updatedBounty : bounty)
            }))
        })
    }

    //DELETE
    deleteBounty = _id => {
        axios.delete("/bounty").then(response => {
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
            }))
        })
    }
    
    render() {
        const mappedBounties = this.state.bounties.map(bounty => <Bounty key={bounty._id} bounty={bounty} deleteBounty={this.deleteBounty} editBounty={this.editBounty}/>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.inputs.firstName}
                    onChange={this.handleChange}/>
                    <input type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.inputs.lastName}
                    onChange={this.handleChange}/>
                    <label> Deceased
                        <input type="radio"
                        name="living"
                        value="false"
                        onChange={this.handleChange}/>
                    </label>
                    <label> Alive
                        <input type="radio"
                        name="living"
                        value="true"
                        onChange={this.handleChange}/>
                    </label>
                    <input type="number"
                    placeholder="Bounty Amount"
                    name="bountyAmount"
                    value={this.state.inputs.bountyAmount}
                    min="1"
                    onChange={this.handleChange}/>
                    <input type="text"
                    placeholder="Image URL"
                    name="imgUrl"
                    value={this.state.inputs.image}
                    onChange={this.handleChange}/>
                    <label> Jedi
                        <input type="radio"
                        name="type"
                        value="Jedi"
                        onChange={this.handleChange}/>
                    </label>
                    <label> Sith
                        <input type="radio"
                        name="type"
                        value="Sith"
                        onChange={this.handleChange}/>
                    </label>
                </form>

                <div>
                    {mappedBounties}
                </div>
            </div>

        )
    }
}

export default BountyList;