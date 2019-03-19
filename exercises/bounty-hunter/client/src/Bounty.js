import React, { Component } from "react";

class Bounty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: true,
            firstName: props.bounty.inputs.firstName,
            lastName: props.bounty.inputs.lastName,
            living: props.bounty.inputs.living,
            bountyAmount: props.bounty.inputs.bountyAmount,
            image: props.bounty.inputs.image,
            type: props.bounty.inputs.type
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleChange = e => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }


    handleSubmit = (e, _id) => {
        e.preventDefault()
        let {firstName, lastName, living, bountyAmount, image, type} = this.state;
        const updatedBounty = {firstName, lastName, living, bountyAmount, image, type}
        this.props.editBounty(_id, updatedBounty)
    }

    render() {
        let {bounty, deleteBounty} = this.props;
        return (
            <div>
                {this.state.edit ? 
                <>
                    <h1>{bounty.firstName}{bounty.lastName}</h1>
                    <div>{bounty.bountyAmount}</div>
                    <img src={bounty.image}/>
                    
                </>
            </div>
        )
    }
}