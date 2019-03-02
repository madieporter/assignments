import React, { Component } from "react";

class Toggle extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    toggler = () => {
        this.setState((prevState) => {
            return prevState.count++
        })
    }

    render() {
        const Comp = this.props.component;
        return (
            <Comp count={this.state.count} toggler={this.toggle} {...this.props}/>
        )
    }
}

export default Toggle;

export function counter(C) {
    return function (props) {
        return <Toggle component={C}{...props}/>
    }
}