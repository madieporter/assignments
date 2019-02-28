import React, { Component } from "react";

class ToggleTwo extends Component {
    constructor() {
        super()

        this.state = {
            activeClass: true
        }
    }

    toggle = () => {
        this.setState(({activeClass}) => ({activeClass: !activeClass}))
    }

    render() {
        const Comp = this.props.component;
        return (
            <Comp activeClass={this.state.activeClass} toggle={this.toggle}{...this.props}/>
        )
    }
}

export default ToggleTwo;

export function changeColor(C) {
    return function (props) {
        return <ToggleTwo component={C}{...props}/>
    }
}