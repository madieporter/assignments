const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/models")

bountyRouter.route("/")

    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })

    .post((req, res) => {
        const newBounty = new Bounty(req.body)
    })

bountyRouter.route("/:_id")

    .get((req, res) => {
        const {_id} = req.params
        const found = (data.find(bounty => bounty._id === _id))
        if (found) { 
            res.send(found)
        } else {
            res.send("Bounty not found")
        }
    })

    .put((req, res) => {
        const updatedBounty = req.body;
        const {_id} = req.params;
        const found = data.forEach(bounty => {
            if (bounty._id === _id) {
                bounty = Object.assign(bounty, updatedBounty)
            }
        })
        if (found) { 
            res.send(found) 
        } else {
            res.send("Updated bounty not found")
        }
    })

    .delete((req, res) => {
        const {_id} = req.params
        const index = data.findIndex(bounty => bounty._id === _id)
        data.splice(index, 1)
        if (index) {
            res.send("Bounty successfully removied") 
        } else {
            res.send("Bounty not found.")
        }
    })

module.exports = (bountyRouter);