import React, { Component } from "react";
import UglyThings from "./UglyThings.js";
import axios from "axios";

class UglyThingsList extends Component {
    constructor() {
        super()

        this.state = {
            inputs: {
                title: "",
                description: ""
            },
            uglythings: []
        }
    }
}