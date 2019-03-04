import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext()

class UglyThingsProvider extends Component {
    constructor() {
        super()

        this.state = {
            uglyThings: []
        }
    }

    //GET
    getUglyThings = () => {
        axios.get("https://api.vschool.io/uglymadie/todo/").then(response => {
            this.setState({
                uglyThings: response.data
            })
        })
    }

    //POST 
    postUglyThing = newUglyThing => {
        axios.post("https://api.vschool.io/uglymadie/todo/", newUglyThing).then(response => {
            this.setState(prevState => ({
                uglyThings: [...prevState.uglythings, response.data]
            }))
        })
    }

    //PUT 
    editUglyThing = (id, updatedUglyThing) => {
        axios.put(`https://api.vschool.io/uglymadie/todo/${id}`).then(response => {
            this.setState(prevState => ({
                uglyThings: prevState.uglyThings.map(uglyThing => uglyThing._id === id ? uglyThing = updatedUglyThing : uglyThing)
            }))
        })
    }

    //DELETE
    deleteUglyThing = id => {
        axios.delete(`https://api.vschool.io/uglymadie/todo/${id}`).then(response => {
            this.setState(prevState => ({
                uglyThing: prevState.todos.filter(todo => todo._id !== id)
            }))
        })
    } 

    render() {
        return (
            <Provider value={{
                getUglyThings: this.getUglyThings,
                postUglyThing: this.postUglyThing,
                editUglyThing: this.editUglyThing,
                deleteUglyThing: this.deleteUglyThing,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default UglyThingsProvider

export function withUglyThings (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}