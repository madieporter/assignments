import React, { Component } from "react";
import Bounty from "./Bounty";
import axios from "axios";

class BountyList extends Component {
    constructor() {
        super()

        this.state ={
            inputs: {
                firstName: "",
                lastName: "",
                living: "",
                bountyAmount: "",
                image: "",
                type: ""
            },
            bounties: []
        }
    }