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
            <div className="all">
                 {this.state.toggled ?
                    <div className="mainBox">
                        <h3 className="title">{uglyThing.title}</h3>
                        <p className="descrip">{uglyThing.description}</p>
                        <img className="images" src={uglyThing.imgUrl} alt=""/><br></br>
                        <button className="btn" onClick={() => deleteUglyThing(uglyThing._id)}>DELETE</button>
                        <button className="btn" onClick={this.toggle}>EDIT</button>
                    </div>
            :
                <Form button="SAVE CHANGES" type="edit" uglyThing={uglyThing} />
                }
            </div> 
        )}      
}

export default withUglyThings(UglyThings);