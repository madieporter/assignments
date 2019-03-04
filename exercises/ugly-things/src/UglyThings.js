import React, { Component } from "react";
import Form from "./Form.js";
import { withUglyThings } from "./UglyThingsProvider";

class UglyThings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggled: true
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            toggled: !prevState.toggled
        }))
    }

    render() {
        let {uglyThing, deleteUglyThing} = this.props;
        console.log(this.props)
        return (
            <div>
                 {this.state.toggled ?
                    <div>
                        <h1>{uglyThing.title}</h1>
                        <p>{uglyThing.description}</p>
                        <img src={uglyThing.imgUrl} alt=""/>
                        <button onClick={() => deleteUglyThing(uglyThing._id)}>DELETE</button>
                        <button onClick={this.toggle}>EDIT</button>
                    </div>
            :
                <Form button="SAVE CHANGES" type="edit" uglyThing={uglyThing} />
                }
            </div> 
        )}      
}

export default withUglyThings(UglyThings);