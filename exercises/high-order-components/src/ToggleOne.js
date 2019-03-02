import React, { Component } from "react";

class ToggleOne extends Component {
    constructor() {
        super()
        this.state = {
            on: false
        }
    }

    toggle = () => {
        this.setState(({on}) => ({on: !on}))
    }

    render() {
        const Comp = this.props.component;
        return (
            <Comp on={this.state.on} toggle={this.toggle}{...this.props}/>
        )
    }
} 

export default ToggleOne;

export function withToggler(C) {
    return function (props) {
        return <ToggleOne component={C}{...props}/>
    }
}