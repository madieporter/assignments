import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext()

class bountyProvider extends Component {
    constructor(){
        super()

        this.state = {
            bounties: [],
            newBounty: false,
            inputs: {
                firstName: "",
                lastName: "",
                bountyAmount: 0,
                living: true,
                image: "",
                type: ""
            }
        }
    }

    //TOGGLE
    toggleNew = () => {
        this.setState(prevState => {
            newBounty: !prevState.newBounty
        })
    }

    //GET
    getBounties = () => {
        axios.get("/bounties").then(response => {
            this.setState({
                bounties: response.data
            })
        })
    }

    //POST
    postBounty = newbounty => {
        axios.post("/bounties", newBounty).then(response => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, response.data]
            }))
        })
    }

    //PUT
    editBounty = (_id, updatedBounty) => {
        axios.put(`/bounties/${_id}`, updatedBounty).then(response => {
            this.setState(prevState => ({
                bounties: prevState.bounties.map(bounty => bounty._id === _id 
                    ?
                    bounty = updatedBounty : bounty)
            }))
        })
    }

    //DELETE
    deleteBounty = _id => {
        axios.delete(`/bounties/${_id}`).then(() => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, response.data]
            }))
        })
    }

    render() {
        return(
            <Provider value={{
                getBounties: this.getBounties,
                postBounty: this.postBounties,
                editBounty: this.editBounty,
                deleteBounty: this.deleteBounty,
                toggleNew: this.toggleNew,
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