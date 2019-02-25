import React, { Component } from "react";

class Heros extends Component {
    constructor(props) {
        super(props)
    }

    catchPhrase = () => {
        alert(this.props.catchPhrase)
    }

    render () {
        const imgStyles = {
            height: "300px"
        }

        const styles = {
            textAlign: "center",
        }

        return (
            <div style={styles}>
                <h1 onClick={this.catchPhrase}>{this.props.name}</h1>
                <img style={imgStyles} src={this.props.img} alt="" onClick={this.catchPhrase}/>
            </div>
        )
    }
    
}



export default Heros;