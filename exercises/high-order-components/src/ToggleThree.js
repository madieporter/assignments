import React, { Component } from "react";

class ToggleThree extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    toggle = () => {
        this.setState((prevState) => {
            return prevState.count++
        })
    }

    render() {
        const Comp = this.props.component;
        return (
            <Comp count={this.state.count} toggle={this.toggle} {...this.props}/>
        )
    }
}

export default ToggleThree;

export function counter(C) {
    return function (props) {
        return <ToggleThree component={C}{...props}/>
    }
}

  